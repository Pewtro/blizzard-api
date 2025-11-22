import { z } from 'zod';

export const GenderNameSchema = z.object({
  female: z.string(),
  male: z.string(),
});
