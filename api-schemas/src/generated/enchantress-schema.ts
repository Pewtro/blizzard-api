import { z } from 'zod';
import { EnchantressItemsSchema } from './enchantress-items-schema';
import { StatsSchema } from './stats-schema';

export const EnchantressSchema = z.object({
  items: EnchantressItemsSchema,
  level: z.number(),
  skills: z.array(z.unknown()),
  slug: z.string(),
  stats: StatsSchema,
});
