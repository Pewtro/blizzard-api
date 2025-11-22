import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { CraftedQuantitySchema } from './crafted-quantity-schema';
import { MediaSchema } from './media-schema';
import { ReagentSchema } from './reagent-schema';
import { HrefSchema } from './href-schema';

export const RecipeResponseSchema = z.object({
  crafted_item: NameIdKeySchema,
  crafted_quantity: CraftedQuantitySchema,
  media: MediaSchema,
  reagents: z.array(ReagentSchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
