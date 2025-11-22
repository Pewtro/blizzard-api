import { z } from 'zod';
import { NameTypeSchema } from './name-type-schema';

export const DamageSchema = z.object({
  damage_class: NameTypeSchema,
  display_string: z.string(),
  max_value: z.number(),
  min_value: z.number(),
});
