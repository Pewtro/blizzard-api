import { z } from 'zod';
import { AchievementSchema } from './achievement-schema';
import { CategoryProgressSchema } from './category-progress-schema';
import { CharacterSchema } from './character-schema';
import { RecentEventSchema } from './recent-event-schema';
import { HrefSchema } from './href-schema';

export const CharacterAchievementsSummaryResponseSchema = z.object({
  achievements: z.array(AchievementSchema),
  category_progress: z.array(CategoryProgressSchema),
  character: CharacterSchema,
  recent_events: z.array(RecentEventSchema),
  statistics: HrefSchema,
  total_points: z.number(),
  total_quantity: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
