import { z } from 'zod';
import { BracketSchema } from './bracket-schema';
import { EntrySchema } from './entry-schema';
import { SeasonSchema } from './season-schema';
import { HrefSchema } from './href-schema';

export const PvpLeaderboardResponseSchema = z.object({
  bracket: BracketSchema,
  entries: z.array(EntrySchema),
  name: z.string(),
  season: SeasonSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
