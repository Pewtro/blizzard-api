import { z } from 'zod';
import { SpecTalentTreeSchema } from './spec-talent-tree-schema';
import { TalentNodeSchema } from './talent-node-schema';
import { HrefSchema } from './href-schema';

export const TalentTreeNodesResponseSchema = z.object({
  id: z.number(),
  spec_talent_trees: z.array(SpecTalentTreeSchema),
  talent_nodes: z.array(TalentNodeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
