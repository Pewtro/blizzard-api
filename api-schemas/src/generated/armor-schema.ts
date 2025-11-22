import { z } from 'zod';
import { NameDescriptionSchema } from './name-description-schema';

export const ArmorSchema = z.object({
  display: NameDescriptionSchema,
  value: z.number(),
});
