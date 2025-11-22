import { z } from 'zod';
import { RGBWithIdSchema } from './rgbwith-id-schema';

export const BorderEmblemSchema = z.object({
  color: RGBWithIdSchema,
  id: z.number(),
  media: z.any(),
});
