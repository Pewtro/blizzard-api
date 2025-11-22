import { z } from 'zod';
import { BestRunSchema } from './best-run-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { MythicRatingSchema } from './mythic-rating-schema';
import { HrefSchema } from './href-schema';

export const CharacterMythicKeystoneSeasonDetailsResponseSchema = z.object({
  best_runs: z.array(BestRunSchema),
  character: NameIdKeySchema,
  mythic_rating: MythicRatingSchema,
  season: z.any(),
  _links: z.object({
    self: HrefSchema,
  }),
});
