import { z } from 'zod';
import { GuildSchema } from './guild-schema';
import { MemberSchema } from './member-schema';
import { HrefSchema } from './href-schema';

export const GuildRosterResponseSchema = z.object({
  guild: GuildSchema,
  members: z.array(MemberSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
