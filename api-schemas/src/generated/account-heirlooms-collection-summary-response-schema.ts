import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { HeirloomSchema } from './heirloom-schema';

export const AccountHeirloomsCollectionSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  heirlooms: z.array(HeirloomSchema),
});
