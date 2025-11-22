import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { WowAccountSchema } from './wow-account-schema';

export const AccountProfileSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  collections: HrefSchema,
  id: z.number(),
  wow_accounts: z.union([z.any(), z.array(WowAccountSchema)]).optional(),
});
