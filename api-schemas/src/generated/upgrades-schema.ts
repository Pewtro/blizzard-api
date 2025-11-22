import { z } from 'zod';

export const UpgradesSchema = z.object({
  display_string: z.string(),
  max_value: z.number(),
  value: z.number(),
});
