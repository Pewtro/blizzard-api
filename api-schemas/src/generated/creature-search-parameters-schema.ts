import { z } from 'zod';

export const CreatureSearchParametersSchema = z.object({
  locale: z.any(),
  name: z.string(),
});
