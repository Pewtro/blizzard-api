import { z } from 'zod';
import { EnchantressSchema } from './enchantress-schema';
import { ScoundrelSchema } from './scoundrel-schema';
import { TemplarSchema } from './templar-schema';

export const FollowersSchema = z.object({
  enchantress: EnchantressSchema,
  scoundrel: ScoundrelSchema,
  templar: TemplarSchema,
});
