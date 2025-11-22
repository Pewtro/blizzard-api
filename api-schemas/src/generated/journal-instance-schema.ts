import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const JournalInstanceSchema = z.object({
  id: z.number(),
  name: z.any(),
  key: HrefSchema,
});
