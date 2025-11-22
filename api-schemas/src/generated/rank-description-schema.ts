import { z } from 'zod';

export const RankDescriptionSchema = z.object({
  description: z.any(),
  rank: z.number(),
});
