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



import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { schemaStep4 as lastStep } from "../lib/component/schemaFormular";
import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";

//formulář
/** @type {import('./$types').Load} */
export const load = async () => {
  // Create the form with the last step, to get all default values
  const form = await superValidate(zod(lastStep));
  return { form };
};

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(lastStep));
    if (!form.valid) return fail(400, { form });

    const transporter = nodemailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: "info@malyleo.cz",
        pass: "$w&$%#J!wG4$w1Pd",
      },
    });

    const mailOptions = {
      from: '"Forlumář MalýLeo" <info@malyleo.cz>',
      to: "info@malyleo.cz",
      cc: form.data.email,
      subject: "Nová zpráva z formuláře TC",
      text: `Ahoj, přišla ti nová zpráva.\n\nJméno: ${form.data.name}\nTelefon: ${form.data.tel} \nMail: ${form.data.email}\nNapsal: ${form.data.text}.`,
    };
    await transporter.sendMail(mailOptions);
    return message(form, "Formulář v pořádku odeslán!");
  },
};
