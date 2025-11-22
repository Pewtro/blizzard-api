import { z } from 'zod';
import { PeriodSchema } from './period-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneSeasonResponseSchema = z.object({
  end_timestamp: z.number(),
  id: z.number(),
  periods: z.array(PeriodSchema),
  season_name: z.union([z.any(), z.string()]),
  start_timestamp: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
