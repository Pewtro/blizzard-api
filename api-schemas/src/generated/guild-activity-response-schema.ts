import { z } from 'zod';
import { ActivityElementSchema } from './activity-element-schema';
import { GuildSchema } from './guild-schema';
import { HrefSchema } from './href-schema';

export const GuildActivityResponseSchema = z.object({
  activities: z.array(ActivityElementSchema),
  guild: GuildSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
