import { z } from 'zod';
import { PeriodSchema } from './period-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystonePeriodIndexResponseSchema = z.object({
  current_period: PeriodSchema,
  periods: z.array(PeriodSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
