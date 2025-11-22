import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { NameIdSchema } from './name-id-schema';

export const TierSchema = z.object({
  known_recipes: z.union([z.any(), z.array(NameIdKeySchema)]).optional(),
  max_skill_points: z.number(),
  skill_points: z.number(),
  tier: NameIdSchema,
});
