import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const RecentEventSchema = z.object({
  achievement: NameIdKeySchema,
  timestamp: z.number(),
});
