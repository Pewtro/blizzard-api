import { z } from 'zod';
import { ArtisanSchema } from './artisan-schema';
import { HeroSchema } from './hero-schema';
import { AccountResponseKillsSchema } from './account-response-kills-schema';
import { ProgressionSchema } from './progression-schema';
import { __typeSchema } from './type-schema';
import { TimePlayedSchema } from './time-played-schema';

export const AccountResponseSchema = z.object({
  battleTag: z.string(),
  blacksmith: ArtisanSchema,
  blacksmithHardcore: ArtisanSchema,
  blacksmithSeason: ArtisanSchema,
  blacksmithSeasonHardcore: ArtisanSchema,
  guildName: z.string(),
  heroes: z.array(HeroSchema),
  highestHardcoreLevel: z.number(),
  jeweler: ArtisanSchema,
  jewelerHardcore: ArtisanSchema,
  jewelerSeason: ArtisanSchema,
  jewelerSeasonHardcore: ArtisanSchema,
  kills: AccountResponseKillsSchema,
  lastHeroPlayed: z.number(),
  lastUpdated: z.number(),
  mystic: ArtisanSchema,
  mysticHardcore: ArtisanSchema,
  mysticSeason: ArtisanSchema,
  mysticSeasonHardcore: ArtisanSchema,
  paragonLevel: z.number(),
  paragonLevelHardcore: z.number(),
  paragonLevelSeason: z.number(),
  paragonLevelSeasonHardcore: z.number(),
  progression: ProgressionSchema,
  seasonalProfiles: __typeSchema,
  timePlayed: TimePlayedSchema,
});
