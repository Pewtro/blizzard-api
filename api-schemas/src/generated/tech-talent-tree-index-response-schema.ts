import { z } from 'zod';
import { TalentTreeSchema } from './talent-tree-schema';
import { HrefSchema } from './href-schema';

export const TechTalentTreeIndexResponseSchema = z.object({
  talent_trees: z.array(TalentTreeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
