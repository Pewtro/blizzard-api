import { z } from 'zod';

export const ClassSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});
