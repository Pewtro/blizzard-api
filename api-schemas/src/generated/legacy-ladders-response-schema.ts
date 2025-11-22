import { z } from 'zod';

export const LegacyLaddersResponseSchema = z.object({
  currentSeason: z.array(z.unknown()),
  previousSeason: z.array(z.unknown()),
  showcasePlacement: z.array(z.unknown()),
});
