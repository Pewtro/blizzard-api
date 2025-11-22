import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { MountSchema } from './mount-schema';

export const AccountMountsCollectionSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  mounts: z.array(MountSchema),
});
