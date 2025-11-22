import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const NameIdKeySchema = z.object({
  key: HrefSchema,
  id: z.number(),
  name: z.string(),
});
