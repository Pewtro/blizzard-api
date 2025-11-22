import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { TierSchema } from './tier-schema';

export const SecondarySchema = z.object({
  max_skill_points: z.union([z.any(), z.number()]).optional(),
  profession: NameIdKeySchema,
  skill_points: z.union([z.any(), z.number()]).optional(),
  tiers: z.union([z.any(), z.array(TierSchema)]).optional(),
});
