import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { BracketSchema } from './bracket-schema';
import { FactionSchema } from './faction-schema';

export const RewardSchema = z.object({
  achievement: NameIdKeySchema,
  bracket: BracketSchema,
  faction: z.union([z.any(), FactionSchema]).optional(),
  rating_cutoff: z.number(),
  specialization: z.union([z.any(), NameIdKeySchema]).optional(),
});
