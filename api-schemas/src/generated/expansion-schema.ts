import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { InstanceSchema } from './instance-schema';

export const ExpansionSchema = z.object({
  expansion: NameIdKeySchema,
  instances: z.array(InstanceSchema),
});
