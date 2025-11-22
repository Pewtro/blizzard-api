import { z } from 'zod';
import { PrimarySchema } from './primary-schema';

export const AttributesSchema = z.object({
  other: z.array(z.unknown()),
  primary: z.array(PrimarySchema),
  secondary: z.array(PrimarySchema),
});
