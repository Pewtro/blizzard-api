import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { __typeSchema } from './type-schema';
import { KeyBaseSchema } from './key-base-schema';
import { HrefSchema } from './href-schema';

export const AchievementResponseSchema = z.object({
  category: NameIdKeySchema,
  criteria: __typeSchema,
  description: z.string(),
  display_order: z.number(),
  is_account_wide: z.boolean(),
  media: KeyBaseSchema,
  points: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
