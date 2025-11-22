import { z } from 'zod';
import { SpellTooltipSchema } from './spell-tooltip-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const PvpTalentSchema = z.object({
  spell_tooltip: SpellTooltipSchema,
  talent: NameIdKeySchema,
});
