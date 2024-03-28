import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "$lib/component/schemaForm";
import { fail } from "@sveltejs/kit";
import { PUBLIC_seznamKey } from '$env/static/public';
import nodemailer from "nodemailer";

//formulář
/** @type {import('./$types').Load} */
export const load = async () => {
  // Create the form with the last step, to get all default values
  const form = await superValidate(zod(schema));
  return { form };
};

/** @type {import('./$types').Actions} */
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
        pass: PUBLIC_seznamKey,
      },
    });

    const mailOptions = {
      from: '"Formulář Malý Leo" <info@malyleo.cz>',
      to: "info@malyleo.cz",
      cc: form.data.email,
      subject: "Nová zpráva z formuláře MalýLeo",
      text: `Ahoj, přišla ti nová zpráva.\n\nJméno: ${form.data.name}\nTelefon: ${form.data.tel} \nMail: ${form.data.email}\nNapsal: ${form.data.text}.`,
    };
    await transporter.sendMail(mailOptions);
    return message(form, "Formulář v pořádku odeslán!");
  },
};



/*  export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	}
}; */

/* export function load({ cookies }) {
  // Předpokládejme, že cookie 'userPreferences' ukládá JSON s nastaveními
  let userPreferencesGDPR = cookies.get("userPreferences");
  if (userPreferencesGDPR) {
    userPreferencesGDPR = JSON.parse(userPreferencesGDPR);
  } else {
    // Výchozí nastavení, pokud cookie neGDPRexistuje
    userPreferencesGDPR = {
      visited: "false",
      choices: {
        necessary: true,
        tracking: true,
        analytics: true,
        marketing: true,
      },
    };
  }

  // Aktualizujte 'visited' na true
  userPreferencesGDPR.visited = "true";

  // Uložte aktualizované preference zpět do cookies
  cookies.set("userPreferencesGDPR", JSON.stringify(userPreferencesGDPR), { path: "/" });

  return {
    userPreferencesGDPR,
  };
}
 */



