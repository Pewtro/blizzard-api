import { z } from 'zod';
import { SelectedSchema } from './selected-schema';

export const SelectedTalentSchema = z.object({
  default_points: z.union([z.any(), z.number()]).optional(),
  id: z.number(),
  rank: z.number(),
  tooltip: SelectedSchema,
});
