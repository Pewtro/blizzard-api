import { z } from 'zod';
import { PrimarySchema } from './primary-schema';

export const RandomAffixSchema = z.object({
  oneOf: z.array(PrimarySchema),
});
