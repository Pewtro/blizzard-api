import { z } from 'zod';

export const MediaSearchParametersSchema = z.object({
  tags: z.union([z.any(), z.string()]).optional(),
});
