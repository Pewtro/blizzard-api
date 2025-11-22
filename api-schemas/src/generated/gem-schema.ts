import { z } from 'zod';
import { AccountHeroItemSchema } from './account-hero-item-schema';

export const GemSchema = z.object({
  attributes: z.array(z.string()),
  isGem: z.boolean(),
  isJewel: z.boolean(),
  item: AccountHeroItemSchema,
  jewelRank: z.union([z.any(), z.number()]).optional(),
  jewelSecondaryUnlockRank: z.union([z.any(), z.number()]).optional(),
});
