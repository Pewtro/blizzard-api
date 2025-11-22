import { z } from 'zod';
import { ClassTalentNodeSchema } from './class-talent-node-schema';
import { __typeSchema } from './type-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { RestrictionLineSchema } from './restriction-line-schema';
import { SpecTalentNodeSchema } from './spec-talent-node-schema';
import { HrefSchema } from './href-schema';

export const TalentTreeResponseSchema = z.object({
  class_talent_nodes: z.array(ClassTalentNodeSchema),
  media: __typeSchema,
  playable_class: NameIdKeySchema,
  playable_specialization: NameIdKeySchema,
  restriction_lines: z.array(RestrictionLineSchema),
  spec_talent_nodes: z.array(SpecTalentNodeSchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
