import { z } from 'zod';

export const MountSearchParametersSchema = z.object({
  locale: z.any(),
  name: z.string(),
});
