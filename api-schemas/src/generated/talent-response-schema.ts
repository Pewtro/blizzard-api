import { z } from 'zod';
import { PlayableClassSchema } from './playable-class-schema';
import { RankDescriptionSchema } from './rank-description-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const TalentResponseSchema = z.object({
  id: z.number(),
  playable_class: PlayableClassSchema,
  rank_descriptions: z.array(RankDescriptionSchema),
  spell: NameIdKeySchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
