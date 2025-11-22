import { z } from 'zod';

export const ParagonSchema = z.object({
  max: z.number(),
  raw: z.number(),
  value: z.number(),
});
