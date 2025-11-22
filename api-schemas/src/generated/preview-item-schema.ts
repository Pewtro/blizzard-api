import { z } from 'zod';
import { ArmorSchema } from './armor-schema';
import { __typeSchema } from './type-schema';
import { DurabilitySchema } from './durability-schema';
import { InventoryTypeSchema } from './inventory-type-schema';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { ItemQualitySchema } from './item-quality-schema';
import { RecipeSchema } from './recipe-schema';
import { RequirementsSchema } from './requirements-schema';
import { SpellSchema } from './spell-schema';
import { StatSchema } from './stat-schema';
import { WeaponSchema } from './weapon-schema';

export const PreviewItemSchema = z.object({
  armor: z.union([z.any(), ArmorSchema]).optional(),
  binding: z.union([z.any(), __typeSchema]).optional(),
  bonus_list: z.union([z.any(), z.array(z.number())]).optional(),
  container_slots: z.union([z.any(), DurabilitySchema]).optional(),
  context: z.union([z.any(), z.number()]).optional(),
  crafting_reagent: z.union([z.any(), z.string()]).optional(),
  description: z.union([z.any(), z.string()]).optional(),
  durability: z.union([z.any(), DurabilitySchema]).optional(),
  inventory_type: InventoryTypeSchema,
  is_subclass_hidden: z.union([z.any(), z.any(), z.any()]).optional(),
  item: MediaSchema,
  item_class: NameIdKeySchema,
  item_subclass: NameIdKeySchema,
  level: z.union([z.any(), DurabilitySchema]).optional(),
  media: MediaSchema,
  name: z.string(),
  quality: ItemQualitySchema,
  recipe: z.union([z.any(), RecipeSchema]).optional(),
  requirements: z.union([z.any(), RequirementsSchema]).optional(),
  sell_price: z.union([z.any(), z.number()]).optional(),
  shield_block: z.union([z.any(), ArmorSchema]).optional(),
  spells: z.union([z.any(), z.array(SpellSchema)]).optional(),
  stats: z.union([z.any(), z.array(StatSchema)]).optional(),
  unique_equipped: z.union([z.any(), z.literal('Unique')]).optional(),
  weapon: z.union([z.any(), WeaponSchema]).optional(),
});
