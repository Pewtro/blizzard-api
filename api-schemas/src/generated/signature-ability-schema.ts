import { z } from 'zod';
import { SignatureAbilitySpellTooltipSchema } from './signature-ability-spell-tooltip-schema';

export const SignatureAbilitySchema = z.object({
  id: z.number(),
  spell_tooltip: SignatureAbilitySpellTooltipSchema,
});
