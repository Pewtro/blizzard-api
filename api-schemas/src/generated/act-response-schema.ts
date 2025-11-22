import { z } from 'zod';
import { QuestSchema } from './quest-schema';

export const ActResponseSchema = z.object({
  name: z.string(),
  number: z.number(),
  quests: z.array(QuestSchema),
  slug: z.string(),
});
