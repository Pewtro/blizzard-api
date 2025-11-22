import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { CrestSchema } from './crest-schema';
import { FactionSchema } from './faction-schema';
import { RealmSchema } from './realm-schema';

export const GuildResponseSchema = z.object({
  achievement_points: z.number(),
  achievements: HrefSchema,
  activity: HrefSchema,
  created_timestamp: z.number(),
  crest: CrestSchema,
  faction: FactionSchema,
  id: z.number(),
  member_count: z.number(),
  name: z.string(),
  name_search: z.string(),
  realm: RealmSchema,
  roster: HrefSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
