import { z } from 'zod';
import { ItemProducedSchema } from './item-produced-schema';
import { ReagentSchema } from './reagent-schema';

export const CraftedBySchema = z.object({
  cost: z.number(),
  id: z.string(),
  itemProduced: ItemProducedSchema,
  name: z.string(),
  reagents: z.array(ReagentSchema),
  slug: z.string(),
});
