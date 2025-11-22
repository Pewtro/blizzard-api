import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const ItemSubClassResponseSchema = z.object({
  class_id: z.number(),
  display_name: z.string(),
  hide_subclass_in_tooltips: z.boolean(),
  subclass_id: z.number(),
  verbose_name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
