import { z } from 'zod';
import { ReputationTiersSchema } from './reputation-tiers-schema';
import { HrefSchema } from './href-schema';

export const ReputationFactionResponseSchema = z.object({
  description: z.string(),
  id: z.number(),
  name: z.string(),
  reputation_tiers: ReputationTiersSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
