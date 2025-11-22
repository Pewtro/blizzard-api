import { z } from 'zod';
import { SelfSchema } from './self-schema';

export const EraLeaderboardSchema = z.object({
  hardcore: z.union([z.any(), z.any(), z.any()]).optional(),
  hero_class_string: z.union([z.any(), z.string()]).optional(),
  ladder: SelfSchema,
  team_size: z.number(),
});
