import { z } from 'zod';
import { SeasonSchema } from './season-schema';
import { HrefSchema } from './href-schema';

export const PvpSeasonIndexResponseSchema = z.object({
  current_season: SeasonSchema,
  seasons: z.array(SeasonSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
