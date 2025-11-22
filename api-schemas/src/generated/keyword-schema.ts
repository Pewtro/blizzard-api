import { z } from 'zod';

export const KeywordSchema = z.object({
  gameModes: z.array(z.number()),
  refText: z.string(),
  slug: z.string(),
  text: z.string(),
  id: z.number(),
  name: z.string(),
});
