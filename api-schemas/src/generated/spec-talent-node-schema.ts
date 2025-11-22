import { z } from 'zod';
import { NodeTypeSchema } from './node-type-schema';
import { SpecTalentNodeRankSchema } from './spec-talent-node-rank-schema';

export const SpecTalentNodeSchema = z.object({
  display_col: z.number(),
  display_row: z.number(),
  id: z.number(),
  locked_by: z.union([z.any(), z.array(z.number())]).optional(),
  node_type: NodeTypeSchema,
  ranks: z.array(SpecTalentNodeRankSchema),
  raw_position_x: z.number(),
  raw_position_y: z.number(),
  unlocks: z.union([z.any(), z.array(z.number())]).optional(),
});
