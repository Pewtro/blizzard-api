import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const ModifiedCraftingIndexResponseSchema = z.object({
  categories: __typeSchema,
  slot_types: __typeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
