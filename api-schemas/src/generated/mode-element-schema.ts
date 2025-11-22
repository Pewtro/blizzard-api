import { z } from 'zod';
import { ModeSchema } from './mode-schema';

export const ModeElementSchema = z.object({
  is_tracked: z.boolean(),
  mode: ModeSchema,
  players: z.number(),
});
