import { z } from 'zod';

export const BaseEffectiveStatSchema = z.object({
  base: z.number(),
  effective: z.number(),
});
