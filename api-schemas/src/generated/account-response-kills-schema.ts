import { z } from 'zod';

export const AccountResponseKillsSchema = z.object({
  elites: z.number(),
  hardcoreMonsters: z.number(),
  monsters: z.number(),
});
