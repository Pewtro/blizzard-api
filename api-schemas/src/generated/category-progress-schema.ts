import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const CategoryProgressSchema = z.object({
  category: NameIdKeySchema,
  points: z.number(),
  quantity: z.number(),
});
