import { z } from 'zod';
import { DisplayStringsSchema } from './display-strings-schema';

export const SellPriceSchema = z.object({
  display_strings: DisplayStringsSchema,
  value: z.number(),
});
