import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { CharacterSchema } from './character-schema';
import { SpecializationSchema } from './specialization-schema';
import { HrefSchema } from './href-schema';

export const CharacterSpecializationsSummaryResponseSchema = z.object({
  active_hero_talent: NameIdKeySchema,
  active_specialization: NameIdKeySchema,
  character: CharacterSchema,
  specializations: z.array(SpecializationSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
