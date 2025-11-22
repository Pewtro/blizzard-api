import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const AbilitySchema = z.object({
  ability: NameIdKeySchema,
  required_level: z.number(),
  slot: z.number(),
});
