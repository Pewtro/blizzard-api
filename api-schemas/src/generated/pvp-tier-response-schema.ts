import { z } from 'zod';
import { BracketSchema } from './bracket-schema';
import { MediaSchema } from './media-schema';
import { HrefSchema } from './href-schema';

export const PvpTierResponseSchema = z.object({
  bracket: BracketSchema,
  max_rating: z.number(),
  media: MediaSchema,
  min_rating: z.number(),
  rating_type: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
