import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { GuildSchema } from './guild-schema';

export const EntrySchema = z.object({
  faction: __typeSchema,
  guild: GuildSchema,
  rank: z.number(),
  region: z.any(),
  timestamp: z.number(),
});
