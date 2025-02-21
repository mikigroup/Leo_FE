import type { Actions } from './$types';
import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "$lib/component/schemaForm";
import { fail } from "@sveltejs/kit";
import { PRIVATE_SEZNAM_KEY } from "$env/static/private";
import { PRIVATE_RECAPTCHA_SECRET_KEY } from "$env/static/private";
import nodemailer from "nodemailer";



async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${PRIVATE_RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    if (!response.ok) {
      console.error('reCAPTCHA verification failed:', await response.text());
      return false;
    }

    const data = await response.json();
    console.log('reCAPTCHA verification response:', data);

    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    try {
      const form = await superValidate(request, zod(schema));
      if (!form.valid) return fail(400, { form });

      // reCAPTCHA verification
      const formData = await request.formData();
      const recaptchaToken = formData.get('recaptchaToken');

      if (!recaptchaToken || typeof recaptchaToken !== 'string') {
        console.error('reCAPTCHA token missing or invalid');
        return fail(400, {
          form,
          error: 'reCAPTCHA verification failed'
        });
      }

      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        console.error('reCAPTCHA verification failed');
        return fail(400, {
          form,
          error: 'reCAPTCHA verification failed'
        });
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.seznam.cz",
        port: 465,
        secure: true,
        auth: {
          user: "info@malyleo.cz",
          pass: PRIVATE_SEZNAM_KEY,
        },
      });

      const mailOptions = {
        from: '"Formulář - MalýLeo" <info@malyleo.cz>',
        to: "info@malyleo.cz",
        cc: form.data.email,
        subject: "Nová zpráva z formuláře MalýLeo",
        text: `Ahoj, přišla ti nová zpráva.\n\nJméno: ${form.data.first_name}\n Příjmení: ${form.data.last_name}\n Telefon: ${form.data.telephone} \n Mail: ${form.data.email}\n Text:${form.data.text}.\n Newsletter: ${form.data.newsletter ? 'Ano' : 'Ne'}`,
      };

      await transporter.sendMail(mailOptions);
      return message(form, "Formulář v pořádku odeslán. Děkujeme, ozveme se co nejdříve.");
    } catch (error) {
      console.error('Form submission error:', error);
      return fail(500, {
        form,
        error: error instanceof Error ? error.message : 'Interní chyba serveru'
      });
    }
  },
} satisfies Actions;