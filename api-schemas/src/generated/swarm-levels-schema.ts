import { z } from 'zod';
import { SwarmLevelsByRaceSchema } from './swarm-levels-by-race-schema';

export const SwarmLevelsSchema = z.object({
  level: z.number(),
  protoss: SwarmLevelsByRaceSchema,
  terran: SwarmLevelsByRaceSchema,
  zerg: SwarmLevelsByRaceSchema,
});
