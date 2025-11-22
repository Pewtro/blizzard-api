import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { FactionSchema } from './faction-schema';
import { GenderSchema } from './gender-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { RealmSchema } from './realm-schema';

export const CharacterSchema = z.object({
  character: HrefSchema,
  faction: FactionSchema,
  gender: GenderSchema,
  id: z.number(),
  level: z.number(),
  name: z.string(),
  playable_class: NameIdKeySchema,
  playable_race: NameIdKeySchema,
  protected_character: HrefSchema,
  realm: RealmSchema,
});
