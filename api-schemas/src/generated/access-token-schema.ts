import { z } from 'zod';

export const AccessTokenSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  sub: z.union([z.any(), z.string()]).optional(),
  token_type: z.literal('bearer'),
});
