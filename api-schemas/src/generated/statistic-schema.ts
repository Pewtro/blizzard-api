import { z } from 'zod';

export const StatisticSchema = z.object({
  description: z.union([z.any(), z.any(), z.string()]).optional(),
  id: z.number(),
  last_updated_timestamp: z.number(),
  name: z.string(),
  quantity: z.number(),
});
