import { z } from 'zod';

export const SkillCategorySchema = z.object({
  name: z.string(),
  slug: z.string(),
});
