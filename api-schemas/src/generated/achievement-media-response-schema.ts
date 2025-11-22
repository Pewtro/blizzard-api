import { z } from 'zod';
import { AchievementMediaItemSchema } from './achievement-media-item-schema';
import { HrefSchema } from './href-schema';

export const AchievementMediaResponseSchema = z.object({
  assets: z.array(AchievementMediaItemSchema),
  id: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
