import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ItemClassIndexResponseSchema = z.object({
  item_classes: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
