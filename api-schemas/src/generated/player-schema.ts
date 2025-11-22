import { z } from 'zod';
import { RowDataSchema } from './row-data-schema';

export const PlayerSchema = z.object({
  accountId: z.number(),
  data: z.array(RowDataSchema),
  key: z.string(),
});
