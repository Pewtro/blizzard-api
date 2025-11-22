import { z } from 'zod';
import { MediaAssetSchema } from './media-asset-schema';
import { HrefSchema } from './href-schema';

export const PlayableClassMediaResponseSchema = z.object({
  assets: z.array(MediaAssetSchema),
  id: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
