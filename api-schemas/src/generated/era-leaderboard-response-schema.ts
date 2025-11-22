import { z } from 'zod';
import { ColumnSchema } from './column-schema';
import { RowSchema } from './row-schema';
import { __typeSchema } from './type-schema';

export const EraLeaderboardResponseSchema = z.object({
  column: z.array(ColumnSchema),
  era: z.number(),
  generated_by: z.string(),
  greater_rift: z.boolean(),
  greater_rift_solo_class: z.string(),
  key: z.string(),
  last_update_time: z.string(),
  row: z.array(RowSchema),
  title: z.string(),
  _links: z.object({
    self: __typeSchema,
  }),
});
