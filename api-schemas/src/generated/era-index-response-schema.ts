import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const EraIndexResponseSchema = z.object({
  current_era: z.number(),
  era: z.array(__typeSchema),
  generated_by: z.string(),
  last_update_time: z.string(),
  _links: z.object({
    self: __typeSchema,
  }),
});
