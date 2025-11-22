import { z } from 'zod';
import { NameDescriptionSchema } from './name-description-schema';
import { NameTypeSchema } from './name-type-schema';

export const StatSchema = z.object({
  display: NameDescriptionSchema,
  is_equip_bonus: z.union([z.any(), z.any(), z.any()]).optional(),
  is_negated: z.union([z.any(), z.any(), z.any()]).optional(),
  type: NameTypeSchema,
  value: z.number(),
});
