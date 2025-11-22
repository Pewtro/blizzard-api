import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CharacterTitlesSummaryResponseSchema = z.object({
  active_title: z.any(),
  character: CharacterSchema,
  titles: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
