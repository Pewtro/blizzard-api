import { z } from 'zod';
import { RealmSchema } from './realm-schema';
import { HrefSchema } from './href-schema';

export const RealmIndexResponseSchema = z.object({
  realms: z.array(RealmSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
