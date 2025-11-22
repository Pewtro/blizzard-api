import { z } from 'zod';
import { RGBASchema } from './rgbaschema';

export const BackgroundSchema = z.object({
  id: z.number(),
  rgba: RGBASchema,
});
