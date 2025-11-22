import { z } from 'zod';
import { KeySchema } from './key-schema';
import { TierSchema } from './tier-schema';
import { __typeSchema } from './type-schema';

export const LeagueDataResponseSchema = z.object({
  key: KeySchema,
  tier: z.array(TierSchema),
  _links: z.object({
    self: __typeSchema,
  }),
});
