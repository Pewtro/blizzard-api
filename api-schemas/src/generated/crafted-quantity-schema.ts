import { z } from 'zod';

export const CraftedQuantitySchema = z.object({
  value: z.number(),
});
