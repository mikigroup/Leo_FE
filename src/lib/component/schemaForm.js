import { z } from "zod";

export const schema = z.object({
  first_name: z.string().min(1), 
  last_name: z.string().min(1),
  email: z.string().email({ message: "Neplatná emailová adresa" }),
  text: z.string().min(1)
});


