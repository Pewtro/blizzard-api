import { z } from 'zod';
import { GenderNameSchema } from './gender-name-schema';
import { HrefSchema } from './href-schema';

export const TitleResponseSchema = z.object({
  gender_name: GenderNameSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
