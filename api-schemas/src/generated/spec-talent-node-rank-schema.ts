import { z } from 'zod';
import { ChoiceOfTooltipSchema } from './choice-of-tooltip-schema';
import { TooltipSchema } from './tooltip-schema';

export const SpecTalentNodeRankSchema = z.object({
  choice_of_tooltips: z.union([z.any(), z.array(ChoiceOfTooltipSchema)]).optional(),
  rank: z.number(),
  tooltip: z.union([z.any(), TooltipSchema]).optional(),
});
