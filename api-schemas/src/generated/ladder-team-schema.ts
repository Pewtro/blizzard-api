import { z } from 'zod';
import { TeamMemberSchema } from './team-member-schema';

export const LadderTeamSchema = z.object({
  joinTimestamp: z.number(),
  losses: z.number(),
  mmr: z.number(),
  points: z.number(),
  previousRank: z.number(),
  teamMembers: z.array(TeamMemberSchema),
  wins: z.number(),
});
