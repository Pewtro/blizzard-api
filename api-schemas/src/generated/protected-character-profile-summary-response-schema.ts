import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { PositionSchema } from './position-schema';
import { ProtectedStatsSchema } from './protected-stats-schema';

export const ProtectedCharacterProfileSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  bind_position: PositionSchema,
  character: z.any(),
  id: z.number(),
  money: z.number(),
  name: z.string(),
  position: PositionSchema,
  protected_stats: ProtectedStatsSchema,
  wow_account: z.number(),
});
