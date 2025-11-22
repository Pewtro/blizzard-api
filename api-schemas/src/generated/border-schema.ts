import { z } from 'zod';
import { RgbWithIdSchema } from './rgb-with-id-schema';

export const BorderSchema = z.object({
  color: RgbWithIdSchema,
  id: z.number(),
  media: z.any(),
});
