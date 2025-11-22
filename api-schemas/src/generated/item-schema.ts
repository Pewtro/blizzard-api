import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const ItemSchema = z.object({
  enchant: z.number(),
  id: z.number(),
  internal_slot_id: z.number(),
  item_appearance_modifier_id: z.number(),
  slot: __typeSchema,
  subclass: z.number(),
});
