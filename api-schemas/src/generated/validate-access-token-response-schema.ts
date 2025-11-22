import { z } from 'zod';

export const ValidateAccessTokenResponseSchema = z.object({
  account_authorities: z.array(z.unknown()),
  authorities: z.array(z.string()),
  client_authorities: z.array(z.unknown()),
  client_id: z.string(),
  exp: z.number(),
  scope: z.array(z.string()),
});
