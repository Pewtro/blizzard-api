import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const SlotTypeSchema = z.object({
  id: z.number(),
  name: z.union([z.any(), z.string()]).optional(),
  key: HrefSchema,
});
