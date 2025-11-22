import { z } from 'zod';
import { EnchantmentSlotSchema } from './enchantment-slot-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const EnchantmentSchema = z.object({
  display_string: z.string(),
  enchantment_id: z.number(),
  enchantment_slot: EnchantmentSlotSchema,
  source_item: z.union([z.any(), NameIdKeySchema]).optional(),
});
