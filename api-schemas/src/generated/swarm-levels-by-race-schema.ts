import { z } from 'zod';

export const SwarmLevelsByRaceSchema = z.object({
  currentLevelXP: z.number(),
  level: z.number(),
  totalLevelXP: z.number(),
});
