import { z } from 'zod';
import { CategorySchema } from './category-schema';
import { HrefSchema } from './href-schema';

export const ProfessionSkillTierResponseSchema = z.object({
  categories: z.array(CategorySchema),
  maximum_skill_level: z.number(),
  minimum_skill_level: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
