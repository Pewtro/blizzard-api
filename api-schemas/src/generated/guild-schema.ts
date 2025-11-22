import { z } from 'zod';
import { FactionSchema } from './faction-schema';
import { RealmSchema } from './realm-schema';
import { HrefSchema } from './href-schema';

export const GuildSchema = z.object({
  faction: FactionSchema,
  realm: RealmSchema,
  key: HrefSchema,
  id: z.number(),
  name: z.string(),
});
