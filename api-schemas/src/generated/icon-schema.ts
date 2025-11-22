import { z } from 'zod';

export const IconSchema = z.object({
  h: z.number(),
  offset: z.number(),
  url: z.string(),
  w: z.number(),
  x: z.number(),
  y: z.number(),
});
