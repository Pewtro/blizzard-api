import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const ResponseBaseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
});
