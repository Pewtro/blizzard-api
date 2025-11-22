import { z } from 'zod';
import { TooltipSchema } from './tooltip-schema';

export const ClassTalentNodeRankSchema = z.object({
  choice_of_tooltips: z.union([z.any(), z.array(TooltipSchema)]).optional(),
  default_points: z.union([z.any(), z.number()]).optional(),
  rank: z.number(),
  tooltip: z.union([z.any(), TooltipSchema]).optional(),
});
