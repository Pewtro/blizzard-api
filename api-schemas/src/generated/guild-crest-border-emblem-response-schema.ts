import { z } from 'zod';
import { GuildCrestAssetSchema } from './guild-crest-asset-schema';
import { HrefSchema } from './href-schema';

export const GuildCrestBorderEmblemResponseSchema = z.object({
  assets: z.array(GuildCrestAssetSchema),
  id: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
