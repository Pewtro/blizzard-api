import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { ReputationSchema } from './reputation-schema';
import { HrefSchema } from './href-schema';

export const CharacterReputationsSummaryResponseSchema = z.object({
  character: CharacterSchema,
  reputations: z.array(ReputationSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
