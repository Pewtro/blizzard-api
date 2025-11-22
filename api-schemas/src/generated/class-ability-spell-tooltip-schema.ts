import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const ClassAbilitySpellTooltipSchema = z.object({
  cast_time: z.string(),
  cooldown: z.union([z.any(), z.string()]).optional(),
  description: z.string(),
  power_cost: z.union([z.any(), z.any(), z.string()]).optional(),
  range: z.union([z.any(), z.string()]).optional(),
  spell: NameIdKeySchema,
});
