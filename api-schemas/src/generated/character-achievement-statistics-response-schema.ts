import { z } from 'zod';
import { CategorySchema } from './category-schema';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';

export const CharacterAchievementStatisticsResponseSchema = z.object({
  categories: z.array(CategorySchema),
  character: CharacterSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
