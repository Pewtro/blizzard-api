import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const QuestIndexResponseSchema = z.object({
  areas: __typeSchema,
  categories: __typeSchema,
  types: __typeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
