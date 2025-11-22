import { z } from 'zod';

export const NameIdSchema = z.object({
  id: z.number(),
  name: z.string(),
});
