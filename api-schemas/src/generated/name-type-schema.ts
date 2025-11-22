import { z } from 'zod';

export const NameTypeSchema = z.object({
  name: z.string(),
  type: z.string(),
});
