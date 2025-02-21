import type { Actions } from './$types';
import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "$lib/component/schemaForm";
import { fail } from "@sveltejs/kit";
import { PRIVATE_SEZNAM_KEY, PRIVATE_RECAPTCHA_SECRET_KEY } from "$env/static/private";
import nodemailer from "nodemailer";

export const load = async () => {
  try {
    const form = await superValidate(zod(schema));
    return { form };
  } catch (error) {
    console.error('Load error:', error);
    throw error;
  }
};

export const actions = {
  default: async ({ request }) => {
    try {
      // Nejdřív zkusíme validovat formulář
      const form = await superValidate(request, zod(schema));
      console.log('Form data received:', form.data);

      if (!form.valid) {
        console.log('Form validation failed:', form.errors);
        return fail(400, { form });
      }

      // Vytvoření transportéru pro email
      const transporter = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 465,
        secure: true,
        auth: {
          user: "info@malyleo.cz",
          pass: PRIVATE_SEZNAM_KEY,
        },
      });

      // Test připojení k SMTP serveru
      try {
        await transporter.verify();
        console.log('SMTP connection successful');
      } catch (error) {
        console.error('SMTP connection failed:', error);
        return fail(500, {
          form,
          error: 'Chyba při připojení k emailovému serveru'
        });
      }

      const mailOptions = {
        from: '"Formulář - MalýLeo" <info@malyleo.cz>',
        to: "info@malyleo.cz",
        cc: form.data.email,
        subject: "Nová zpráva z formuláře MalýLeo",
        text: `Ahoj, přišla ti nová zpráva.\n\nJméno: ${form.data.first_name}\n Příjmení: ${form.data.last_name}\n Telefon: ${form.data.telephone} \n Mail: ${form.data.email}\n Text:${form.data.text}.\n Newsletter: ${form.data.newsletter ? 'Ano' : 'Ne'}`,
      };

      // Pokus o odeslání emailu
      try {
        console.log('Attempting to send email...');
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Email sending failed:', error);
        return fail(500, {
          form,
          error: 'Chyba při odesílání emailu'
        });
      }

      return message(form, "Formulář v pořádku odeslán. Děkujeme, ozveme se co nejdříve.");

    } catch (error) {
      console.error('Server action error:', error);
      return fail(500, {
        form: error.form,
        error: 'Došlo k neočekávané chybě při zpracování formuláře'
      });
    }
  }
} satisfies Actions;