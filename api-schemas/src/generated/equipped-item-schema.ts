import { z } from 'zod';
import { ArmorSchema } from './armor-schema';
import { NameTypeSchema } from './name-type-schema';
import { DisplayStringValueSchema } from './display-string-value-schema';
import { EnchantmentSchema } from './enchantment-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { ModifiedCraftingStatSchema } from './modified-crafting-stat-schema';
import { NameDescriptionSchema } from './name-description-schema';
import { RequirementsSchema } from './requirements-schema';
import { SellPriceSchema } from './sell-price-schema';
import { SetSchema } from './set-schema';
import { SocketSchema } from './socket-schema';
import { SpellSchema } from './spell-schema';
import { StatSchema } from './stat-schema';
import { TransmogSchema } from './transmog-schema';
import { WeaponSchema } from './weapon-schema';

export const EquippedItemSchema = z.object({
  armor: z.union([z.any(), ArmorSchema]).optional(),
  binding: NameTypeSchema,
  bonus_list: z.union([z.any(), z.array(z.number())]).optional(),
  context: z.number(),
  description: z.union([z.any(), z.string()]).optional(),
  durability: z.union([z.any(), DisplayStringValueSchema]).optional(),
  enchantments: z.union([z.any(), z.array(EnchantmentSchema)]).optional(),
  inventory_type: NameTypeSchema,
  is_subclass_hidden: z.union([z.any(), z.any(), z.any()]).optional(),
  item: z.any(),
  item_class: NameIdKeySchema,
  item_subclass: NameIdKeySchema,
  level: DisplayStringValueSchema,
  limit_category: z.union([z.any(), z.string()]).optional(),
  media: z.any(),
  modified_appearance_id: z.union([z.any(), z.number()]).optional(),
  modified_crafting_stat: z.union([z.any(), z.array(ModifiedCraftingStatSchema)]).optional(),
  name: z.string(),
  name_description: NameDescriptionSchema,
  quality: NameTypeSchema,
  quantity: z.number(),
  requirements: z.union([z.any(), RequirementsSchema]).optional(),
  sell_price: z.union([z.any(), SellPriceSchema]).optional(),
  set: z.union([z.any(), SetSchema]).optional(),
  slot: NameTypeSchema,
  sockets: z.union([z.any(), z.array(SocketSchema)]).optional(),
  spells: z.union([z.any(), z.array(SpellSchema)]).optional(),
  stats: z.union([z.any(), z.array(StatSchema)]).optional(),
  transmog: z.union([z.any(), TransmogSchema]).optional(),
  unique_equipped: z.union([z.any(), z.string()]).optional(),
  weapon: z.union([z.any(), WeaponSchema]).optional(),
});
