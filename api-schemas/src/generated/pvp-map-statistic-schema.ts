import { z } from 'zod';
import { MatchStatisticsSchema } from './match-statistics-schema';
import { NameIdSchema } from './name-id-schema';

export const PvpMapStatisticSchema = z.object({
  match_statistics: MatchStatisticsSchema,
  world_map: NameIdSchema,
});
