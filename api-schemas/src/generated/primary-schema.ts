import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { TierSchema } from './tier-schema';

export const PrimarySchema = z.object({
  profession: NameIdKeySchema,
  tiers: z.array(TierSchema),
});
