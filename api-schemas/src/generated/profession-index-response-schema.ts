import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ProfessionIndexResponseSchema = z.object({
  professions: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
