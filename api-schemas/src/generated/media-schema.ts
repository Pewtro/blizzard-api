import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const MediaSchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
