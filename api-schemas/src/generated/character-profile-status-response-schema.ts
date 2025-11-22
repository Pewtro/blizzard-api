import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const CharacterProfileStatusResponseSchema = z.object({
  id: z.number(),
  is_valid: z.boolean(),
  _links: z.object({
    self: HrefSchema,
  }),
});
