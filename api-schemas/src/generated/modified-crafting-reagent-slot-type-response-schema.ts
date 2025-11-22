import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ModifiedCraftingReagentSlotTypeResponseSchema = z.object({
  compatible_categories: z.array(NameIdKeySchema),
  description: z.string(),
  id: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
