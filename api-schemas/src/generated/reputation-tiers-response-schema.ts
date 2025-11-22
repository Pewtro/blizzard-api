import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { TierSchema } from './tier-schema';
import { HrefSchema } from './href-schema';

export const ReputationTiersResponseSchema = z.object({
  faction: z.union([z.any(), NameIdKeySchema]).optional(),
  id: z.number(),
  tiers: z.array(TierSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
