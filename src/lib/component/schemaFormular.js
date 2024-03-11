import { z } from "zod";

export const schemaStep1 = z.object({
  name: z.string().min(1),
});

export const schemaStep2 = schemaStep1.extend({
  email: z.string().email(),
});

export const schemaStep3 = schemaStep2.extend({
  tel: z.string().min(6),
});

export const schemaStep4 = schemaStep3.extend({
  text: z.string().min(1),
});
