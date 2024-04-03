import { z } from "zod";

export const schema = z.object({
  first_name: z.string().min(1), 
  last_name: z.string().min(1),
  email: z.string().email({ message: "Neplatná emailová adresa" }),
  telephone: z.string().min(9),
  text: z.string().min(1)
});


