import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const MythicKeystonePeriodResponseSchema = z.object({
  end_timestamp: z.number(),
  id: z.number(),
  start_timestamp: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
