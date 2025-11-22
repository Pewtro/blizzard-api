import { z } from 'zod';
import { TooltipSpellTooltipSchema } from './tooltip-spell-tooltip-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const TooltipSchema = z.object({
  spell_tooltip: TooltipSpellTooltipSchema,
  talent: NameIdKeySchema,
});
