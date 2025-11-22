import { z } from 'zod';

export const StandingSchema = z.object({
  max: z.number(),
  name: z.string(),
  raw: z.number(),
  tier: z.number(),
  value: z.number(),
});
