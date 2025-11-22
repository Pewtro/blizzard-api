import { z } from 'zod';

export const RatingWithValueSchema = z.object({
  rating: z.number(),
  rating_bonus: z.number(),
  value: z.number(),
});
