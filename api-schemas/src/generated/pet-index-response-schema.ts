import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PetIndexResponseSchema = z.object({
  pets: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
