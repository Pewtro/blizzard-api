import { z } from 'zod';
import { ActSchema } from './act-schema';

export const ActIndexResponseSchema = z.object({
  acts: z.array(ActSchema),
});
