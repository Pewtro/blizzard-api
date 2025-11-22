import { z } from 'zod';
import { ReputationTierSchema } from './reputation-tier-schema';
import { HrefSchema } from './href-schema';

export const ReputationTiersIndexResponseSchema = z.object({
  reputation_tiers: z.array(ReputationTierSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
