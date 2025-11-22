import { z } from 'zod';

export const StatsSchema = z.object({
  breed_id: z.number(),
  health: z.number(),
  power: z.number(),
  speed: z.number(),
});
