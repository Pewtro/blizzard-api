import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { CriteriaSchema } from './criteria-schema';

export const AchievementSchema = z.object({
  achievement: NameIdKeySchema,
  completed_timestamp: z.union([z.any(), z.number()]).optional(),
  criteria: z.union([z.any(), CriteriaSchema]).optional(),
  id: z.number(),
});
