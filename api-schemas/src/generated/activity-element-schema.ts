import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { CharacterAchievementSchema } from './character-achievement-schema';

export const ActivityElementSchema = z.object({
  activity: __typeSchema,
  character_achievement: CharacterAchievementSchema,
  timestamp: z.number(),
});
