import { z } from 'zod';
import { QualitySchema } from './quality-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { StatsSchema } from './stats-schema';

export const PetSchema = z.object({
  active_slot: z.union([z.any(), z.number()]).optional(),
  creature_display: z.union([z.any(), z.any()]).optional(),
  id: z.number(),
  is_active: z.union([z.any(), z.any(), z.any()]).optional(),
  is_favorite: z.union([z.any(), z.any(), z.any()]).optional(),
  level: z.number(),
  name: z.union([z.any(), z.string()]).optional(),
  quality: QualitySchema,
  species: NameIdKeySchema,
  stats: StatsSchema,
});
