import { z } from 'zod';
import { MediaAssetSchema } from './media-asset-schema';
import { HrefSchema } from './href-schema';

export const TechTalentMediaResponseSchema = z.object({
  assets: z.array(MediaAssetSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
