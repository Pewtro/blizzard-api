import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { ExpansionSchema } from './expansion-schema';
import { HrefSchema } from './href-schema';

export const CharacterRaidsResponseSchema = z.object({
  character: CharacterSchema,
  expansions: z.array(ExpansionSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
