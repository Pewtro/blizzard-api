import { z } from 'zod';
import { NodeTypeSchema } from './node-type-schema';
import { RankSchema } from './rank-schema';

export const TalentNodeSchema = z.object({
  display_col: z.number(),
  display_row: z.number(),
  id: z.number(),
  node_type: NodeTypeSchema,
  ranks: z.array(RankSchema),
  raw_position_x: z.number(),
  raw_position_y: z.number(),
});
