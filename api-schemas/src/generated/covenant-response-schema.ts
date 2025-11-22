import { z } from 'zod';
import { RenownRewardSchema } from './renown-reward-schema';
import { HrefSchema } from './href-schema';

export const CovenantResponseSchema = z.object({
  description: z.string(),
  id: z.number(),
  name: z.string(),
  renown_rewards: z.array(RenownRewardSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
