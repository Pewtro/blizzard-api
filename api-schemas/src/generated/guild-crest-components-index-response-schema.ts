import { z } from 'zod';
import { BorderSchema } from './border-schema';
import { ColorsSchema } from './colors-schema';
import { HrefSchema } from './href-schema';

export const GuildCrestComponentsIndexResponseSchema = z.object({
  borders: z.array(BorderSchema),
  colors: ColorsSchema,
  emblems: z.array(BorderSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
