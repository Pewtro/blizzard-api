import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { KeystoneAffixElementSchema } from './keystone-affix-element-schema';
import { LeadingGroupSchema } from './leading-group-schema';
import { NameIdSchema } from './name-id-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneLeaderboardResponseSchema = z.object({
  connected_realm: __typeSchema,
  keystone_affixes: z.array(KeystoneAffixElementSchema),
  leading_groups: z.array(LeadingGroupSchema),
  map: NameIdSchema,
  map_challenge_mode_id: z.number(),
  name: z.string(),
  period: z.number(),
  period_end_timestamp: z.number(),
  period_start_timestamp: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
