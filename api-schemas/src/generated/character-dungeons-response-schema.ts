import { z } from 'zod';
import { ExpansionSchema } from './expansion-schema';
import { HrefSchema } from './href-schema';

export const CharacterDungeonsResponseSchema = z.object({
  expansions: z.array(ExpansionSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
