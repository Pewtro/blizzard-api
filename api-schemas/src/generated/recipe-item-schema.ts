import { z } from 'zod';
import { ArmorSchema } from './armor-schema';
import { __typeSchema } from './type-schema';
import { DurabilitySchema } from './durability-schema';
import { InventoryTypeSchema } from './inventory-type-schema';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { ItemQualitySchema } from './item-quality-schema';
import { RequirementsSchema } from './requirements-schema';
import { StatSchema } from './stat-schema';
import { WeaponSchema } from './weapon-schema';

export const RecipeItemSchema = z.object({
  armor: z.union([z.any(), ArmorSchema]).optional(),
  binding: __typeSchema,
  durability: DurabilitySchema,
  inventory_type: InventoryTypeSchema,
  item: MediaSchema,
  item_class: NameIdKeySchema,
  item_subclass: NameIdKeySchema,
  level: DurabilitySchema,
  media: MediaSchema,
  name: z.string(),
  quality: ItemQualitySchema,
  requirements: RequirementsSchema,
  sell_price: __typeSchema,
  stats: z.array(StatSchema),
  weapon: z.union([z.any(), WeaponSchema]).optional(),
});
