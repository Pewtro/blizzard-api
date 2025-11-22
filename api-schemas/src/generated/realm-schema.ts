import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const RealmSchema = z.object({
  slug: z.string(),
  key: HrefSchema,
  id: z.number(),
  name: z.string(),
});
