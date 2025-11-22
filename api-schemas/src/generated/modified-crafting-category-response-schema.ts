import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const ModifiedCraftingCategoryResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
