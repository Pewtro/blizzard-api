import { z } from 'zod';
import { SingleCardBackSearchResponseSchema } from './single-card-back-search-response-schema';

export const CardBackSearchResponseSchema = z.object({
  cardBacks: z.array(SingleCardBackSearchResponseSchema),
  cardCount: z.number(),
  page: z.number(),
  pageCount: z.number(),
});
