import { z } from 'zod';

export const TimePlayedSchema = z.object({
  barbarian: z.number(),
  crusader: z.number(),
  'demon-hunter': z.number(),
  monk: z.number(),
  necromancer: z.number(),
  'witch-doctor': z.number(),
  wizard: z.number(),
});
