import { z } from 'zod';
import { LadderTeamSchema } from './ladder-team-schema';

export const GrandmasterLeaderboardResponseSchema = z.object({
  ladderTeams: z.array(LadderTeamSchema),
});
