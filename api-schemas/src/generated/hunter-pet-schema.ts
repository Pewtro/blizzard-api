import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const HunterPetSchema = z.object({
  creature: NameIdKeySchema,
  creature_display: z.any(),
  is_active: z.union([z.any(), z.any(), z.any()]).optional(),
  is_summoned: z.union([z.any(), z.any(), z.any()]).optional(),
  level: z.number(),
  name: z.string(),
  slot: z.number(),
});
