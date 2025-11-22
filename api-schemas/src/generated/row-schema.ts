import { z } from 'zod';
import { RowDataSchema } from './row-data-schema';
import { PlayerSchema } from './player-schema';

export const RowSchema = z.object({
  data: z.array(RowDataSchema),
  order: z.number(),
  player: z.array(PlayerSchema),
});
