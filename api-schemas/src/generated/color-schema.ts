import { z } from 'zod';

export const ColorSchema = z.object({
  a: z.number(),
  b: z.number(),
  g: z.number(),
  r: z.number(),
});
