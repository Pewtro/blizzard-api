import { z } from 'zod';
import { StatisticSchema } from './statistic-schema';
import { SubCategorySchema } from './sub-category-schema';

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  statistics: z.array(StatisticSchema),
  sub_categories: z.array(SubCategorySchema),
});
