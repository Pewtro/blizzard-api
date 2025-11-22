import { z } from 'zod';
import { RewardSchema } from './reward-schema';
import { SeasonSchema } from './season-schema';
import { HrefSchema } from './href-schema';

export const PvpRewardsIndexResponseSchema = z.object({
  rewards: z.array(RewardSchema),
  season: SeasonSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
