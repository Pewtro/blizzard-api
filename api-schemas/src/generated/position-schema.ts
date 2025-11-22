import { z } from 'zod';
import { NameIdSchema } from './name-id-schema';

export const PositionSchema = z.object({
  facing: z.number(),
  map: NameIdSchema,
  x: z.number(),
  y: z.number(),
  z: z.number(),
  zone: NameIdSchema,
});
