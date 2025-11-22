import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { CharacterSchema } from './character-schema';
import { CustomizationSchema } from './customization-schema';
import { FactionSchema } from './faction-schema';
import { GenderSchema } from './gender-schema';
import { GuildCrestSchema } from './guild-crest-schema';
import { ItemSchema } from './item-schema';
import { HrefSchema } from './href-schema';

export const CharacterAppearanceResponseSchema = z.object({
  active_spec: NameIdKeySchema,
  character: CharacterSchema,
  customizations: z.array(CustomizationSchema),
  faction: FactionSchema,
  gender: GenderSchema,
  guild_crest: GuildCrestSchema,
  items: z.array(ItemSchema),
  playable_class: NameIdKeySchema,
  playable_race: NameIdKeySchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
