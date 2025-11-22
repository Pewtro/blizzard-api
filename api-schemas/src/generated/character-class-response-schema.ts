import { z } from 'zod';
import { SkillCategorySchema } from './skill-category-schema';
import { __typeSchema } from './type-schema';

export const CharacterClassResponseSchema = z.object({
  femaleName: z.string(),
  icon: z.string(),
  maleName: z.string(),
  name: z.string(),
  skillCategories: z.array(SkillCategorySchema),
  skills: __typeSchema,
  slug: z.string(),
});
