import { z } from 'zod';
import { CreatureDisplaySchema } from './creature-display-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CreatureResponseSchema = z.object({
  creature_displays: z.array(CreatureDisplaySchema),
  family: NameIdKeySchema,
  id: z.number(),
  is_tameable: z.boolean(),
  name: z.string(),
  type: NameIdKeySchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
