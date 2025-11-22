import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const PurpleSpellTooltipSchema = z.object({
  cast_time: z.string(),
  description: z.string(),
  spell: NameIdKeySchema,
});
