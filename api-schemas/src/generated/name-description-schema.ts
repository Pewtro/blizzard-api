import { z } from 'zod';
import { ColorSchema } from './color-schema';

export const NameDescriptionSchema = z.object({
  color: ColorSchema,
  display_string: z.string(),
});
