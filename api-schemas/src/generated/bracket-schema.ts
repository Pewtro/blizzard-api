import { z } from 'zod';

export const BracketSchema = z.object({
  id: z.number(),
  type: z.string(),
});
