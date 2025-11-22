import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { ToySchema } from './toy-schema';

export const AccountToysCollectionSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  toys: z.array(ToySchema),
});
