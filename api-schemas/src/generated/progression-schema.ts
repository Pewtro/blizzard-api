import { z } from 'zod';

export const ProgressionSchema = z.object({
  act1: z.boolean(),
  act2: z.boolean(),
  act3: z.boolean(),
  act4: z.boolean(),
  act5: z.boolean(),
});
