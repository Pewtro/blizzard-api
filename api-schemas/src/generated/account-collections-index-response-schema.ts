import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const AccountCollectionsIndexResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  heirlooms: HrefSchema,
  mounts: HrefSchema,
  pets: HrefSchema,
  toys: HrefSchema,
  transmogs: HrefSchema,
});
