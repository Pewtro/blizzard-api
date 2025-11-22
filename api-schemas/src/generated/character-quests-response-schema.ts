import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';
import { NameIdKeySchema } from './name-id-key-schema';

export const CharacterQuestsResponseSchema = z.object({
  character: CharacterSchema,
  completed: HrefSchema,
  in_progress: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
