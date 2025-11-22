import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { MediaSchema } from './media-schema';
import { PowerSchema } from './power-schema';
import { HrefSchema } from './href-schema';

export const AzeriteEssenceResponseSchema = z.object({
  allowed_specializations: z.array(NameIdKeySchema),
  media: MediaSchema,
  powers: z.array(PowerSchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
