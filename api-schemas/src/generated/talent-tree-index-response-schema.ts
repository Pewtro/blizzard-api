import { z } from 'zod';
import { TalentTreeSchema } from './talent-tree-schema';
import { HrefSchema } from './href-schema';

export const TalentTreeIndexResponseSchema = z.object({
  class_talent_trees: z.array(TalentTreeSchema),
  spec_talent_trees: z.array(TalentTreeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
