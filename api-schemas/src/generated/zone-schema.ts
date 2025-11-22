import { z } from 'zod';

export const ZoneSchema = z.object({
  slug: z.string(),
});
