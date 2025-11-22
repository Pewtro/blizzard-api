import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CharacterCompletedQuestsResponseSchema = z.object({
  character: CharacterSchema,
  quests: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
