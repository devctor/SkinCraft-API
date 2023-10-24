import { z } from 'zod';

export const SkinSchema = z.object({
  name: z.string(),
  type: z.string(),
  price: z.number().int(),
  color: z.string(),
});

type Skin = z.infer<typeof SkinSchema>;
