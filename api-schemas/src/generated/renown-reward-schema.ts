import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const RenownRewardSchema = z.object({
  level: z.number(),
  reward: NameIdKeySchema,
});
