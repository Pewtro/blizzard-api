import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const PowerSchema = z.object({
  id: z.number(),
  main_power_spell: NameIdKeySchema,
  passive_power_spell: NameIdKeySchema,
  rank: z.number(),
});
