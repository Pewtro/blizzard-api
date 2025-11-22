import { z } from 'zod';
import { AchievementSchema } from './achievement-schema';
import { CategoryProgressSchema } from './category-progress-schema';
import { GuildSchema } from './guild-schema';
import { RecentEventSchema } from './recent-event-schema';
import { HrefSchema } from './href-schema';

export const GuildAchievementsResponseSchema = z.object({
  achievements: z.array(AchievementSchema),
  category_progress: z.array(CategoryProgressSchema),
  guild: GuildSchema,
  recent_events: z.array(RecentEventSchema),
  total_points: z.number(),
  total_quantity: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
