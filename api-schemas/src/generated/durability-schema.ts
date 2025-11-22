import { z } from 'zod';

export const DurabilitySchema = z.object({
  display_string: z.string(),
  value: z.number(),
});
