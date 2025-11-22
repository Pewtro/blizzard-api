import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const CreatureDisplaySchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
