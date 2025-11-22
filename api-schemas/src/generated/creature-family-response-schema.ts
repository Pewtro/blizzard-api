import { z } from 'zod';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CreatureFamilyResponseSchema = z.object({
  id: z.number(),
  media: MediaSchema,
  name: z.string(),
  specialization: NameIdKeySchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
