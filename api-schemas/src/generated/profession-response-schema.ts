import { z } from 'zod';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { TypeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const ProfessionResponseSchema = z.object({
  description: z.string(),
  media: MediaSchema,
  skill_tiers: z.array(NameIdKeySchema),
  type: TypeSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
