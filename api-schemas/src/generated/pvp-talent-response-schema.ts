import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PvpTalentResponseSchema = z.object({
  compatible_slots: z.array(z.number()),
  description: z.string(),
  id: z.number(),
  playable_specialization: NameIdKeySchema,
  spell: NameIdKeySchema,
  unlock_player_level: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
