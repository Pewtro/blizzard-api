import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const WowTokenResponseSchema = z.object({
  last_updated_timestamp: z.number(),
  price: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
