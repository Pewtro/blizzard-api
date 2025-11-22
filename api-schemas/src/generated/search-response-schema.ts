import { z } from 'zod';
import { TSchema } from './tschema';

export const SearchResponseSchema = z.object({
  maxPageSize: z.number(),
  page: z.number(),
  pageCount: z.number(),
  pageSize: z.number(),
  resultCountCapped: z.union([z.any(), z.any(), z.any()]).optional(),
  results: z.array(TSchema),
});
