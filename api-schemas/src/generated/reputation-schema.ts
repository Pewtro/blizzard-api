import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { ParagonSchema } from './paragon-schema';
import { StandingSchema } from './standing-schema';

export const ReputationSchema = z.object({
  faction: NameIdKeySchema,
  paragon: z.union([z.any(), ParagonSchema]).optional(),
  standing: StandingSchema,
});
