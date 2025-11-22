import { z } from 'zod';
import { BracketSchema } from './bracket-schema';
import { CharacterSchema } from './character-schema';
import { FactionSchema } from './faction-schema';
import { MatchStatisticsSchema } from './match-statistics-schema';
import { HrefSchema } from './href-schema';

export const CharacterPvpBracketStatisticsResponseSchema = z.object({
  bracket: BracketSchema,
  character: CharacterSchema,
  faction: FactionSchema,
  rating: z.number(),
  season: z.any(),
  season_match_statistics: MatchStatisticsSchema,
  tier: z.any(),
  weekly_match_statistics: MatchStatisticsSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
