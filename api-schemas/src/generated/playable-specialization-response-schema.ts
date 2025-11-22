import { z } from 'zod';
import { GenderNameSchema } from './gender-name-schema';
import { MediaSchema } from './media-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { PrimaryStatTypeSchema } from './primary-stat-type-schema';
import { PvpTalentSchema } from './pvp-talent-schema';
import { SpecTalentTreeSchema } from './spec-talent-tree-schema';
import { HrefSchema } from './href-schema';

export const PlayableSpecializationResponseSchema = z.object({
  gender_description: GenderNameSchema,
  media: MediaSchema,
  playable_class: NameIdKeySchema,
  power_type: NameIdKeySchema,
  primary_stat_type: PrimaryStatTypeSchema,
  pvp_talents: z.array(PvpTalentSchema),
  role: PrimaryStatTypeSchema,
  spec_talent_tree: SpecTalentTreeSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
