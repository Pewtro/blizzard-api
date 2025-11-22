import { z } from 'zod';

export const AccessTokenRequestArgumentsSchema = z.object({
  key: z.union([z.any(), z.string()]).optional(),
  origin: z.any().optional(),
  secret: z.union([z.any(), z.string()]).optional(),
});
