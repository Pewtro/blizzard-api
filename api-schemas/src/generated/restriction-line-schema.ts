import { z } from 'zod';

export const RestrictionLineSchema = z.object({
  is_for_class: z.boolean(),
  required_points: z.number(),
  restricted_row: z.number(),
});
