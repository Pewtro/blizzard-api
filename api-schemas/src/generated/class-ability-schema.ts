import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { ClassAbilitySpellTooltipSchema } from './class-ability-spell-tooltip-schema';

export const ClassAbilitySchema = z.object({
  id: z.number(),
  playable_class: NameIdKeySchema,
  spell_tooltip: ClassAbilitySpellTooltipSchema,
});
