import type { Actions } from './$types';
import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "$lib/component/schemaForm";
import { fail } from "@sveltejs/kit";
import { PRIVATE_SEZNAM_KEY } from "$env/static/private";
import nodemailer from "nodemailer";

export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions = {
    default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    if (!form.valid) return fail(400, { form });
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
    return message(form, "Formulář v pořádku odeslán!");
  },
} satisfies Actions;
