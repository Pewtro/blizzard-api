import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { __typeSchema } from './type-schema';

export const HeirloomSchema = z.object({
  heirloom: NameIdKeySchema,
  upgrade: __typeSchema,
});
