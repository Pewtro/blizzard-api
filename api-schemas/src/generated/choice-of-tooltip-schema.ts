import { z } from 'zod';
import { PurpleSpellTooltipSchema } from './purple-spell-tooltip-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const ChoiceOfTooltipSchema = z.object({
  spell_tooltip: PurpleSpellTooltipSchema,
  talent: NameIdKeySchema,
});
