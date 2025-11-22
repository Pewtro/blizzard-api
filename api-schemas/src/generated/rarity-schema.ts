import { z } from 'zod';

export const RaritySchema = z.object({
  craftingCost: z.array(z.union([z.any(), z.number()])),
  dustValue: z.array(z.union([z.any(), z.number()])),
  slug: z.string(),
  id: z.number(),
  name: z.string(),
});
