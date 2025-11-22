import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const ToySchema = z.object({
  is_favorite: z.union([z.any(), z.any(), z.any()]).optional(),
  toy: NameIdKeySchema,
});
