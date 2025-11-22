import { z } from 'zod';
import { EraLeaderboardSchema } from './era-leaderboard-schema';
import { __typeSchema } from './type-schema';

export const EraResponseSchema = z.object({
  era_id: z.number(),
  era_start_date: z.number(),
  generated_by: z.string(),
  last_update_time: z.string(),
  leaderboard: z.array(EraLeaderboardSchema),
  _links: z.object({
    self: __typeSchema,
  }),
});
