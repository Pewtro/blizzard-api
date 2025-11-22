import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CovenantProgressSchema = z.object({
  chosen_covenant: NameIdKeySchema,
  renown_level: z.number(),
  soulbinds: HrefSchema,
});
