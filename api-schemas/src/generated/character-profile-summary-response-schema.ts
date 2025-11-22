import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { CovenantProgressSchema } from './covenant-progress-schema';
import { FactionSchema } from './faction-schema';
import { GenderSchema } from './gender-schema';
import { GuildSchema } from './guild-schema';
import { RealmSchema } from './realm-schema';

export const CharacterProfileSummaryResponseSchema = z.object({
  achievement_points: z.number(),
  achievements: HrefSchema,
  achievements_statistics: HrefSchema,
  active_spec: NameIdKeySchema,
  active_title: z.any(),
  appearance: HrefSchema,
  average_item_level: z.number(),
  character_class: NameIdKeySchema,
  collections: HrefSchema,
  covenant_progress: CovenantProgressSchema,
  encounters: HrefSchema,
  equipment: HrefSchema,
  equipped_item_level: z.number(),
  experience: z.number(),
  faction: FactionSchema,
  gender: GenderSchema,
  guild: GuildSchema,
  hunter_pets: HrefSchema,
  id: z.number(),
  last_login_timestamp: z.number(),
  level: z.number(),
  media: HrefSchema,
  mythic_keystone_profile: HrefSchema,
  name: z.string(),
  name_search: z.string(),
  professions: HrefSchema,
  pvp_summary: HrefSchema,
  quests: HrefSchema,
  race: NameIdKeySchema,
  realm: RealmSchema,
  reputations: HrefSchema,
  specializations: HrefSchema,
  statistics: HrefSchema,
  titles: HrefSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
