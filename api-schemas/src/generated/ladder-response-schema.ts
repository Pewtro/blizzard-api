import { z } from 'zod';

export const LadderResponseSchema = z.object({
  allLadderMemberships: z.array(z.unknown()),
  ladderTeams: z.array(z.unknown()),
  ranksAndPools: z.array(z.unknown()),
});
