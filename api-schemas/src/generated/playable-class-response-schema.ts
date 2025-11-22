import { z } from 'zod';
import { GenderNameSchema } from './gender-name-schema';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const PlayableClassResponseSchema = z.object({
  gender_name: GenderNameSchema,
  media: MediaSchema,
  playable_races: z.array(NameIdKeySchema),
  power_type: NameIdKeySchema,
  pvp_talent_slots: __typeSchema,
  specializations: z.array(NameIdKeySchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
