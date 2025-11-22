import { z } from 'zod';
import { CardSchema } from './card-schema';
import { ClassSchema } from './class-schema';
import { HeroSchema } from './hero-schema';

export const DeckResponseSchema = z.object({
  cardCount: z.number(),
  cards: z.array(CardSchema),
  class: ClassSchema,
  deckCode: z.string(),
  format: z.string(),
  hero: HeroSchema,
  heroPower: HeroSchema,
  version: z.number(),
});
