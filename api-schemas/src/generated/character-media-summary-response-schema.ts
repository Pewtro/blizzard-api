import { z } from 'zod';
import { AssetSchema } from './asset-schema';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';

export const CharacterMediaSummaryResponseSchema = z.object({
  assets: z.array(AssetSchema),
  character: CharacterSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
