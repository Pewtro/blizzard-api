import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const ReputationTiersSchema = z.object({
  id: z.number(),
  key: HrefSchema,
});
