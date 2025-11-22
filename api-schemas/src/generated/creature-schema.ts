import { z } from 'zod';
import { CreatureDisplaySchema } from './creature-display-schema';

export const CreatureSchema = z.object({
  creature_display: CreatureDisplaySchema,
  description: z.union([z.any(), z.string()]).optional(),
  id: z.number(),
  name: z.string(),
});
