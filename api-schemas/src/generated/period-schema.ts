import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const PeriodSchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
