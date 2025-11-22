import { z } from 'zod';

export const UnitsSchema = z.object({
  copper: z.number(),
  gold: z.number(),
  silver: z.number(),
});
