import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const ItemElementSchema = z.object({
  is_equipped: z.union([z.any(), z.any(), z.any()]).optional(),
  key: HrefSchema,
  id: z.number(),
  name: z.string(),
});
