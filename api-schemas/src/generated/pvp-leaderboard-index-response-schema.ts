import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { SeasonSchema } from './season-schema';
import { HrefSchema } from './href-schema';

export const PvpLeaderboardIndexResponseSchema = z.object({
  leaderboards: z.array(NameIdKeySchema),
  season: SeasonSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
