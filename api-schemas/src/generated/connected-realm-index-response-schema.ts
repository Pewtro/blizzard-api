import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const ConnectedRealmIndexResponseSchema = z.object({
  connected_realms: z.array(__typeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
