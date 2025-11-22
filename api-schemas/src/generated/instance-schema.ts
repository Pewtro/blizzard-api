import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { TSchema } from './tschema';

export const InstanceSchema = z.object({
  instance: NameIdKeySchema,
  modes: z.array(TSchema),
});
