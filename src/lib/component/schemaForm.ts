import { z } from "zod";

export const schema = z.object({
  first_name: z.string().min(1, { message: "Uveďte prosím jméno" }),
  last_name: z.string().min(1, { message: "Uveďte prosím příjmení" }),
  email: z.string().email({ message: "Napište validní emailovou adresu" }),
  telephone: z.string()
    .min(9, { message: "Telefonní číslo musí mít minimálně 9 čísel" })
    .max(20, { message: "Telefonní číslo je příliš dlouhé" }),
  text: z.string().min(1, { message: "Doplňte text prosím" }),
  newsletter: z.boolean().default(false),
  recaptchaToken: z.string().optional(),
});