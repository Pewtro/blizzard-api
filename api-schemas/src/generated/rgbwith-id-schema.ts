import { z } from 'zod';
import { ColorSchema } from './color-schema';

export const RGBWithIdSchema = z.object({
  id: z.number(),
  rgba: ColorSchema,
});
