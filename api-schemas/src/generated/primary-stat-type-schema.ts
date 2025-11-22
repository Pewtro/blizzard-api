import { z } from 'zod';

export const PrimaryStatTypeSchema = z.object({
  name: z.string(),
  type: z.string(),
});
