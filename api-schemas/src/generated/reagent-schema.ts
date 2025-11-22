import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const ReagentSchema = z.object({
  quantity: z.number(),
  reagent: NameIdKeySchema,
});
