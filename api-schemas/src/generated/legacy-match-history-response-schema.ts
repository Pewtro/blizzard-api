import { z } from 'zod';
import { MatchSchema } from './match-schema';

export const LegacyMatchHistoryResponseSchema = z.object({
  matches: z.array(MatchSchema),
});
