import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ItemClassResponseSchema = z.object({
  class_id: z.number(),
  item_subclasses: z.array(NameIdKeySchema),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
