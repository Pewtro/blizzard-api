import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const MemberSchema = z.object({
  character: z.any(),
  equipped_item_level: z.number(),
  race: NameIdKeySchema,
  specialization: NameIdKeySchema,
});
