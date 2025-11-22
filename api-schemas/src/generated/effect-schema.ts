import { z } from 'zod';

export const EffectSchema = z.object({
  display_string: z.string(),
  is_active: z.boolean(),
  required_count: z.number(),
});
