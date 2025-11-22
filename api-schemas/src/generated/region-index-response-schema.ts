import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const RegionIndexResponseSchema = z.object({
  regions: z.array(__typeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
