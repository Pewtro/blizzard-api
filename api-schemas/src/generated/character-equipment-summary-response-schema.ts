import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { SetSchema } from './set-schema';
import { EquippedItemSchema } from './equipped-item-schema';
import { HrefSchema } from './href-schema';

export const CharacterEquipmentSummaryResponseSchema = z.object({
  character: CharacterSchema,
  equipped_item_sets: z.array(SetSchema),
  equipped_items: z.array(EquippedItemSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
