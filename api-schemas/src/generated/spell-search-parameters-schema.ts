import { z } from 'zod';

export const SpellSearchParametersSchema = z.object({
  locale: z.any(),
  name: z.string(),
});
