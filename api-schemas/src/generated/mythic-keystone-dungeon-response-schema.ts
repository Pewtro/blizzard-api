import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { KeystoneUpgradeSchema } from './keystone-upgrade-schema';
import { NameIdSchema } from './name-id-schema';
import { ZoneSchema } from './zone-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneDungeonResponseSchema = z.object({
  dungeon: NameIdKeySchema,
  is_tracked: z.boolean(),
  keystone_upgrades: z.array(KeystoneUpgradeSchema),
  map: NameIdSchema,
  zone: ZoneSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
