import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const SpellSchema = z.object({
  description: z.string(),
  spell: NameIdKeySchema,
});
