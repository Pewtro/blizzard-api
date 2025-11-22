import { z } from 'zod';
import { CardSchema } from './card-schema';

export const CardSearchResponseSchema = z.object({
  cardCount: z.number(),
  cards: z.array(CardSchema),
  page: z.number(),
  pageCount: z.number(),
});
