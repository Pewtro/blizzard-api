import { z } from 'zod';
import { MediaSchema } from './media-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneAffixResponseSchema = z.object({
  description: z.string(),
  media: MediaSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
