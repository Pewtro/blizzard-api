import { z } from 'zod';
import { SourceSchema } from './source-schema';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { AttackSpeedClassSchema } from './attack-speed-class-schema';
import { RequirementsSchema } from './requirements-schema';
import { StatSchema } from './stat-schema';
import { UpgradesSchema } from './upgrades-schema';
import { WeaponSchema } from './weapon-schema';

export const UpgradeItemSchema = z.object({
  binding: SourceSchema,
  bonus_list: z.array(z.number()),
  context: z.number(),
  inventory_type: SourceSchema,
  item: MediaSchema,
  item_class: NameIdKeySchema,
  item_subclass: NameIdKeySchema,
  level: AttackSpeedClassSchema,
  media: MediaSchema,
  name: z.string(),
  quality: SourceSchema,
  requirements: RequirementsSchema,
  stats: z.array(StatSchema),
  upgrades: UpgradesSchema,
  weapon: WeaponSchema,
});
