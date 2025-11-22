import { z } from 'zod';

export const TypeSchema = z.object({
  name: z.string(),
  type: z.string(),
});
