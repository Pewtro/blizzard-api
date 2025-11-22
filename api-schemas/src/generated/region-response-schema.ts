import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const RegionResponseSchema = z.object({
  patch_string: z.string(),
  tag: z.string(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
