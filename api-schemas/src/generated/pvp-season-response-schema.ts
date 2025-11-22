import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const PvpSeasonResponseSchema = z.object({
  id: z.number(),
  leaderboards: __typeSchema,
  rewards: __typeSchema,
  season_name: z.union([z.any(), z.string()]).optional(),
  season_start_timestamp: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
