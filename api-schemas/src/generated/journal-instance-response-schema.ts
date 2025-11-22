import { z } from 'zod';
import { NameIdSchema } from './name-id-schema';
import { CategorySchema } from './category-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { MediaSchema } from './media-schema';
import { ModeElementSchema } from './mode-element-schema';
import { HrefSchema } from './href-schema';

export const JournalInstanceResponseSchema = z.object({
  area: NameIdSchema,
  category: CategorySchema,
  description: z.string(),
  encounters: z.array(NameIdKeySchema),
  expansion: NameIdKeySchema,
  location: NameIdSchema,
  map: NameIdSchema,
  media: MediaSchema,
  minimum_level: z.number(),
  modes: z.array(ModeElementSchema),
  order_index: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
