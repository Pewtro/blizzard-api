import { z } from 'zod';
import { AchievementSchema } from './achievement-schema';
import { CategorySchema } from './category-schema';
import { CriterionSchema } from './criterion-schema';
import { RewardSchema } from './reward-schema';

export const StaticProfileResponseSchema = z.object({
  achievements: z.array(AchievementSchema),
  categories: z.array(CategorySchema),
  criteria: z.array(CriterionSchema),
  rewards: z.array(RewardSchema),
});
