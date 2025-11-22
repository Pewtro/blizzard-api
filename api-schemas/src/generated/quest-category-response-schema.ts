import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const QuestCategoryResponseSchema = z.object({
  category: z.string(),
  id: z.number(),
  quests: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
