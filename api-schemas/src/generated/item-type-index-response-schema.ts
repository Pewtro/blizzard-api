import { z } from 'zod';

export const ItemTypeIndexResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  path: z.string(),
});
