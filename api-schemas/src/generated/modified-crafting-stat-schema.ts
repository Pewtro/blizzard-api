import { z } from 'zod';

export const ModifiedCraftingStatSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
});
