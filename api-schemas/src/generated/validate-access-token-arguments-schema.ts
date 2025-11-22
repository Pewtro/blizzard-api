import { z } from 'zod';

export const ValidateAccessTokenArgumentsSchema = z.object({
  origin: z.any().optional(),
  token: z.union([z.any(), z.string()]).optional(),
});
