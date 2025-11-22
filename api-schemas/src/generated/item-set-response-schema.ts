import { z } from 'zod';
import { EffectSchema } from './effect-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ItemSetResponseSchema = z.object({
  effects: z.array(EffectSchema),
  id: z.number(),
  items: z.array(NameIdKeySchema),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
