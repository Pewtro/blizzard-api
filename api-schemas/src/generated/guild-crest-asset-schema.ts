import { z } from 'zod';

export const GuildCrestAssetSchema = z.object({
  key: z.string(),
  value: z.string(),
});
