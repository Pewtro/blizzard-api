import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const PointsSchema = z.object({
  categoryPoints: __typeSchema,
  totalPoints: z.number(),
});
