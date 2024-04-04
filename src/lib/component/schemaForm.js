import { z } from "zod";

export const schema = z.object({
  first_name: z.string().min(1, { message: "Jméno je povinné" }),
  last_name: z.string().min(1, { message: "Příjmení je povinné" }),
  email: z.string().email({ message: "Neplatná emailová adresa" }),
  telephone: z.string().min(9, { message: "Telefonní číslo musí mít minimálně 9 čísel" }),
  text: z.string().min(1, { message: "Text je povinný" })
});
