import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { TraitSchema } from './trait-schema';

export const SoulbindSchema = z.object({
  is_active: z.union([z.any(), z.any(), z.any()]).optional(),
  soulbind: NameIdKeySchema,
  traits: z.array(TraitSchema),
});
