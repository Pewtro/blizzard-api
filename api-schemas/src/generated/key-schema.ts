import { z } from 'zod';

export const KeySchema = z.object({
  league_id: z.number(),
  queue_id: z.number(),
  season_id: z.number(),
  team_type: z.number(),
});
