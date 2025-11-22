import { z } from 'zod';

export const ChoiceSchema = z.object({
  display_order: z.number(),
  id: z.number(),
  name: z.union([z.any(), z.string()]).optional(),
});
