import { z } from 'zod';
import { DisplayMediaAssetSchema } from './display-media-asset-schema';
import { HrefSchema } from './href-schema';

export const CreatureDisplayMediaResponseSchema = z.object({
  assets: z.array(DisplayMediaAssetSchema),
  id: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
