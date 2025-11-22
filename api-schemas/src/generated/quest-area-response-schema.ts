import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const QuestAreaResponseSchema = z.object({
  area: z.string(),
  id: z.number(),
  quests: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
