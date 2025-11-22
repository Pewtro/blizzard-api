import { z } from 'zod';
import { MediaSchema } from './media-schema';
import { HrefSchema } from './href-schema';

export const SpellResponseSchema = z.object({
  description: z.union([z.any(), z.string()]),
  media: MediaSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
