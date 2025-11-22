import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const MercenaryHeroSchema = z.object({
  collectible: z.number(),
  craftingCost: z.number(),
  default: z.number(),
  faction: z.union([z.any(), z.number()]),
  mercId: z.number(),
  rarity: z.number(),
  roleId: z.number(),
  statsByLevel: __typeSchema,
});
