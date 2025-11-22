import { z } from 'zod';
import { EffectSchema } from './effect-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { ItemElementSchema } from './item-element-schema';

export const SetSchema = z.object({
  display_string: z.string(),
  effects: z.array(EffectSchema),
  item_set: NameIdKeySchema,
  items: z.array(ItemElementSchema),
});
