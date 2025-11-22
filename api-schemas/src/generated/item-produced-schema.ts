import { z } from 'zod';

export const ItemProducedSchema = z.object({
  id: z.string(),
  path: z.string(),
});
