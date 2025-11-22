import { z } from 'zod';
import { UnitsSchema } from './units-schema';

export const MoneySchema = z.object({
  units: UnitsSchema,
  value: z.number(),
});
