import { z } from 'zod';

export const SeasonResponseSchema = z.object({
  endDate: z.string(),
  number: z.number(),
  seasonId: z.number(),
  startDate: z.string(),
  year: z.number(),
});
