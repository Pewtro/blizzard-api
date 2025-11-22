import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const QuestTypeResponseSchema = z.object({
  id: z.number(),
  quests: z.array(NameIdKeySchema),
  type: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
