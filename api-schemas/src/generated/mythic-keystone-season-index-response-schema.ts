import { z } from 'zod';
import { PeriodSchema } from './period-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneSeasonIndexResponseSchema = z.object({
  current_season: PeriodSchema,
  seasons: z.array(PeriodSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
