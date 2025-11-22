import { z } from 'zod';
import { GuildSchema } from './guild-schema';
import { HrefSchema } from './href-schema';

export const GuildAchievementsClassicEraResponseSchema = z.object({
  guild: GuildSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
