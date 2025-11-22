import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PetAbilityIndexResponseSchema = z.object({
  abilities: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
