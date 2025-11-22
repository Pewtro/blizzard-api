import { z } from 'zod';
import { FactionSchema } from './faction-schema';
import { GenderNameSchema } from './gender-name-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PlayableRaceResponseSchema = z.object({
  faction: FactionSchema,
  gender_name: GenderNameSchema,
  is_allied_race: z.boolean(),
  is_selectable: z.boolean(),
  playable_classes: z.array(NameIdKeySchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
