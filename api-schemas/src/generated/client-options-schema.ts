import { z } from 'zod';

export const ClientOptionsSchema = z.object({
  key: z.string(),
  kyOptions: z.any().optional(),
  locale: z.any().optional(),
  origin: z.any(),
  secret: z.string(),
  token: z.union([z.any(), z.string()]).optional(),
});
