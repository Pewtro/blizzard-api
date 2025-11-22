import { z } from 'zod';
import { NodeTypeSchema } from './node-type-schema';
import { ClassTalentNodeRankSchema } from './class-talent-node-rank-schema';

export const ClassTalentNodeSchema = z.object({
  display_col: z.number(),
  display_row: z.number(),
  id: z.number(),
  locked_by: z.union([z.any(), z.array(z.number())]).optional(),
  node_type: NodeTypeSchema,
  ranks: z.array(ClassTalentNodeRankSchema),
  raw_position_x: z.number(),
  raw_position_y: z.number(),
  unlocks: z.union([z.any(), z.array(z.number())]).optional(),
});
