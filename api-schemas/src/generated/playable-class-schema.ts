import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const PlayableClassSchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
