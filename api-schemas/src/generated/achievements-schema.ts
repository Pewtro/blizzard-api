import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { PointsSchema } from './points-schema';

export const AchievementsSchema = z.object({
  achievements: z.array(__typeSchema),
  points: PointsSchema,
});
