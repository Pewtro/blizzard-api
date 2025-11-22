import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ToyIndexResponseSchema = z.object({
  toys: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
