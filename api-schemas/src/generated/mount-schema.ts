import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const MountSchema = z.object({
  is_favorite: z.union([z.any(), z.any(), z.any()]).optional(),
  mount: NameIdKeySchema,
});
