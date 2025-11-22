import { z } from 'zod';
import { StatisticSchema } from './statistic-schema';

export const SubCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  statistics: z.array(StatisticSchema),
});
