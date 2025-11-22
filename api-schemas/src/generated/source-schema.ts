import { z } from 'zod';

export const SourceSchema = z.object({
  name: z.string(),
  type: z.string(),
});
