import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { PvpMapStatisticSchema } from './pvp-map-statistic-schema';
import { HrefSchema } from './href-schema';

export const CharacterPvpSummaryResponseSchema = z.object({
  character: CharacterSchema,
  honor_level: z.number(),
  honorable_kills: z.number(),
  pvp_map_statistics: z.array(PvpMapStatisticSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
