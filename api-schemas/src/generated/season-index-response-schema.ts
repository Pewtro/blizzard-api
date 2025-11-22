import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const SeasonIndexResponseSchema = z.object({
  current_season: z.number(),
  generated_by: z.string(),
  last_update_time: z.string(),
  season: z.array(__typeSchema),
  service_current_season: z.number(),
  service_season_state: z.string(),
  _links: z.object({
    self: __typeSchema,
  }),
});
