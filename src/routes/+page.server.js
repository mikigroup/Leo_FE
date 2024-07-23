import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "../lib/component/schemaForm";
import { fail } from "@sveltejs/kit";
import { PUBLIC_seznamKey } from "$env/static/public";
import nodemailer from "nodemailer";

/** @type {import('./$types').Load} */
export const load = async () => {  
  const form = await superValidate(zod(schema));
  return { form };
};

/** @type {import('./$types').Actions} */
export const actions = {    
    default: async ({ request }) => {
    console.log("ODESLAT")
    const form = await superValidate(request, zod(schema));
    if (!form.valid) return fail(400, { form });
    console.log(PUBLIC_seznamKey);

    const transporter = nodemailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: "info@malyleo.cz",
        pass: PUBLIC_seznamKey,
      },
    });

   const mailOptions = {
     from: '"Formulář MalýLeo" <info@malyleo.cz>',
     to: "info@malyleo.cz",
     cc: form.data.email,
     subject: "Nová zpráva z formuláře MalýLeo",
     text: `Ahoj, přišla ti nová zpráva.\n\nJméno: ${form.data.first_name}\n Příjmení: ${form.last_name}\n Telefon: ${form.data.telephone} \n Mail: ${form.data.email}\n Text:${form.data.text}.`,
   };
     await transporter.sendMail(mailOptions);
    return message(form, "Formulář v pořádku odeslán!");
  },
};
