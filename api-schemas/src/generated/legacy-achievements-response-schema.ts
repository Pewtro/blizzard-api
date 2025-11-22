import { z } from 'zod';
import { AchievementSchema } from './achievement-schema';
import { CategorySchema } from './category-schema';

export const LegacyAchievementsResponseSchema = z.object({
  achievements: z.array(AchievementSchema),
  categories: z.array(CategorySchema),
});
