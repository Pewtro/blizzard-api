import { z } from 'zod';

export const DisplayStringValueSchema = z.object({
  display_string: z.string(),
  value: z.number(),
});
