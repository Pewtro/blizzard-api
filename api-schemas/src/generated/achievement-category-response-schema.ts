import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const AchievementCategoryResponseSchema = z.object({
  achievements: z.array(NameIdKeySchema),
  aggregates_by_faction: __typeSchema,
  display_order: z.number(),
  isGuildCategory: z.boolean(),
  parent_category: NameIdKeySchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
