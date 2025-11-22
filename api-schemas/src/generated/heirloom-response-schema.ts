import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { MediaSchema } from './media-schema';
import { SourceSchema } from './source-schema';
import { UpgradeSchema } from './upgrade-schema';
import { HrefSchema } from './href-schema';

export const HeirloomResponseSchema = z.object({
  id: z.number(),
  item: NameIdKeySchema,
  media: MediaSchema,
  source: SourceSchema,
  source_description: z.string(),
  upgrades: z.array(UpgradeSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
