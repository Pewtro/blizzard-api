import { z } from 'zod';

export const MatchStatisticsSchema = z.object({
  lost: z.number(),
  played: z.number(),
  won: z.number(),
});
