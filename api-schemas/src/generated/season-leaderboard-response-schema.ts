import { z } from 'zod';
import { ColumnSchema } from './column-schema';
import { RowSchema } from './row-schema';
import { __typeSchema } from './type-schema';

export const SeasonLeaderboardResponseSchema = z.object({
  achievement_points: z.boolean(),
  column: z.array(ColumnSchema),
  generated_by: z.string(),
  key: z.string(),
  last_update_time: z.string(),
  row: z.array(RowSchema),
  season: z.number(),
  title: z.string(),
  _links: z.object({
    self: __typeSchema,
  }),
});
