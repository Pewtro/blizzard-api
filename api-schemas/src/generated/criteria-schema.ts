import { z } from 'zod';

export const CriteriaSchema = z.object({
  amount: z.union([z.any(), z.number()]).optional(),
  child_criteria: z.union([z.any(), z.array(z.any())]).optional(),
  id: z.number(),
  is_completed: z.boolean(),
});
