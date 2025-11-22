import { z } from 'zod';

export const EnchantmentSlotSchema = z.object({
  id: z.number(),
  type: z.string(),
});
