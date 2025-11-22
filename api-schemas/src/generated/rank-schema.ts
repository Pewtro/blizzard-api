import { z } from 'zod';
import { SpellTooltipSchema } from './spell-tooltip-schema';

export const RankSchema = z.object({
  id: z.number(),
  spell_tooltip: SpellTooltipSchema,
  tier: z.number(),
});
