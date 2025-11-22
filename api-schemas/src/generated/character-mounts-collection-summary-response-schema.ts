import { z } from 'zod';
import { MountSchema } from './mount-schema';
import { HrefSchema } from './href-schema';

export const CharacterMountsCollectionSummaryResponseSchema = z.object({
  mounts: z.array(MountSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
