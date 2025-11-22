import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const SignatureAbilitySpellTooltipSchema = z.object({
  cast_time: z.string(),
  cooldown: z.string(),
  description: z.string(),
  spell: NameIdKeySchema,
});
