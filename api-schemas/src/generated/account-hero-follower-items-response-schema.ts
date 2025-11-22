import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const AccountHeroFollowerItemsResponseSchema = z.object({
  enchantress: __typeSchema,
  scoundrel: __typeSchema,
  templar: __typeSchema,
});
