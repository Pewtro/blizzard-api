import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const KeystoneAffixElementSchema = z.object({
  keystone_affix: NameIdKeySchema,
  starting_level: z.number(),
});
