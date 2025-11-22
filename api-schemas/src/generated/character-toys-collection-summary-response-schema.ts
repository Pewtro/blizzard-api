import { z } from 'zod';
import { ToySchema } from './toy-schema';
import { HrefSchema } from './href-schema';

export const CharacterToysCollectionSummaryResponseSchema = z.object({
  toys: z.array(ToySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
