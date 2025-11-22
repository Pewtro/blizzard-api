import { z } from 'zod';
import { AssetSchema } from './asset-schema';
import { HrefSchema } from './href-schema';

export const JournalInstanceMediaResponseSchema = z.object({
  assets: z.array(AssetSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
