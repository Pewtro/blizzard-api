import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const SeasonSchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
