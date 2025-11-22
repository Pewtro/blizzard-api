import { z } from 'zod';

export const SetGroupSchema = z.object({
  cardSets: z.array(z.string()),
  icon: z.union([z.any(), z.string()]).optional(),
  name: z.string(),
  slug: z.string(),
  standard: z.union([z.any(), z.any(), z.any()]).optional(),
  svg: z.union([z.any(), z.any(), z.string()]).optional(),
  year: z.union([z.any(), z.number()]).optional(),
  yearRange: z.union([z.any(), z.string()]).optional(),
});
