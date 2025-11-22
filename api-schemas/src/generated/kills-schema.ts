import { z } from 'zod';

export const KillsSchema = z.object({
  elites: z.number(),
});
