import { z } from 'zod';

export const BattlePetTypeSchema = z.object({
  type: z.string(),
  id: z.number(),
  name: z.string(),
});
