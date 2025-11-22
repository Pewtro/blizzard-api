import { z } from 'zod';

export const CareerSchema = z.object({
  careerTotalGames: z.number(),
  highest1v1Rank: z.string(),
  highestTeamRank: z.string(),
  primaryRace: z.string(),
  protossWins: z.number(),
  seasonTotalGames: z.number(),
  terranWins: z.number(),
  zergWins: z.number(),
});
