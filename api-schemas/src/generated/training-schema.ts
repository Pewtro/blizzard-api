import { z } from 'zod';
import { TierSchema } from './tier-schema';

export const TrainingSchema = z.object({
  tiers: z.array(TierSchema),
});
