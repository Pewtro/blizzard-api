import { z } from 'zod';
import { MoneySchema } from './money-schema';
import { ReputationSchema } from './reputation-schema';

export const RewardsSchema = z.object({
  experience: z.number(),
  money: MoneySchema,
  reputations: z.array(ReputationSchema),
});
