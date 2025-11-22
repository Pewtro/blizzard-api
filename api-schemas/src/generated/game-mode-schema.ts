import { z } from 'zod';

export const GameModeSchema = z.object({
  gameModes: z.union([z.any(), z.array(z.number())]).optional(),
  slug: z.string(),
  id: z.number(),
  name: z.string(),
});
