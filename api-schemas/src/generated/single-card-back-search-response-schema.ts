import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const SingleCardBackSearchResponseSchema = z.object({
  id: z.number(),
  image: z.string(),
  name: z.union([z.string(), __typeSchema]),
  slug: z.string(),
  sortCategory: z.number(),
  text: z.union([z.string(), __typeSchema]),
});
