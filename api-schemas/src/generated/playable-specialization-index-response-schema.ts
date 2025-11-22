import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PlayableSpecializationIndexResponseSchema = z.object({
  character_specializations: z.array(NameIdKeySchema),
  pet_specializations: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
