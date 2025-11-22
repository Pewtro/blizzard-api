import { z } from 'zod';

export const QuestSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});
