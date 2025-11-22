import { z } from 'zod';

export const RuneSchema = z.object({
  description: z.string(),
  descriptionHtml: z.string(),
  level: z.number(),
  name: z.string(),
  slug: z.string(),
  type: z.string(),
});
