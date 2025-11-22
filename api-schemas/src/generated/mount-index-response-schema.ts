import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const MountIndexResponseSchema = z.object({
  mounts: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
