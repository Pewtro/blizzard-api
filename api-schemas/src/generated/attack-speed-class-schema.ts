import { z } from 'zod';

export const AttackSpeedClassSchema = z.object({
  display_string: z.string(),
  value: z.number(),
});
