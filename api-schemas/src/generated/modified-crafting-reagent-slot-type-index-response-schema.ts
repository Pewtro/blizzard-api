import { z } from 'zod';
import { SlotTypeSchema } from './slot-type-schema';
import { HrefSchema } from './href-schema';

export const ModifiedCraftingReagentSlotTypeIndexResponseSchema = z.object({
  slot_types: z.array(SlotTypeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
