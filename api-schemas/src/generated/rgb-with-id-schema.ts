import { z } from 'zod';
import { ColorSchema } from './color-schema';

export const RgbWithIdSchema = z.object({
  id: z.number(),
  rgba: ColorSchema,
});
