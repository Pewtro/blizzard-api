import { z } from 'zod';
import { InventoryTypeSchema } from './inventory-type-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { MediaSchema } from './media-schema';
import { PreviewItemSchema } from './preview-item-schema';
import { ItemQualitySchema } from './item-quality-schema';
import { HrefSchema } from './href-schema';

export const ItemResponseSchema = z.object({
  description: z.union([z.any(), z.string()]).optional(),
  inventory_type: InventoryTypeSchema,
  is_equippable: z.boolean(),
  is_stackable: z.boolean(),
  item_class: NameIdKeySchema,
  item_subclass: NameIdKeySchema,
  level: z.number(),
  max_count: z.number(),
  media: MediaSchema,
  preview_item: PreviewItemSchema,
  purchase_price: z.number(),
  purchase_quantity: z.number(),
  quality: ItemQualitySchema,
  required_level: z.number(),
  sell_price: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
