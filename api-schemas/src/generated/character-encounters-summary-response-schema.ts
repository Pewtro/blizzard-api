import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';

export const CharacterEncountersSummaryResponseSchema = z.object({
  character: CharacterSchema,
  dungeons: HrefSchema,
  raids: HrefSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
