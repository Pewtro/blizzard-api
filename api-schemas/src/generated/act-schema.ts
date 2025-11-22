import { z } from 'zod';
import { QuestSchema } from './quest-schema';

export const ActSchema = z.object({
  name: z.string(),
  number: z.number(),
  quests: z.array(QuestSchema),
  slug: z.string(),
});
