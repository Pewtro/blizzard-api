import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { PrimarySchema } from './primary-schema';
import { SecondarySchema } from './secondary-schema';
import { HrefSchema } from './href-schema';

export const CharacterProfessionsSummaryResponseSchema = z.object({
  character: CharacterSchema,
  primaries: z.array(PrimarySchema),
  secondaries: z.array(SecondarySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
