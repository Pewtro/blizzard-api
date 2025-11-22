import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { SoulbindSchema } from './soulbind-schema';
import { HrefSchema } from './href-schema';

export const CharacterSoulbindsResponseSchema = z.object({
  character: CharacterSchema,
  chosen_covenant: NameIdKeySchema,
  renown_level: z.number(),
  soulbinds: z.array(SoulbindSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
