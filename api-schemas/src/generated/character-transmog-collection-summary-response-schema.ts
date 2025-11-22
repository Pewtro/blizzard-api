import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { SlotSchema } from './slot-schema';
import { HrefSchema } from './href-schema';

export const CharacterTransmogCollectionSummaryResponseSchema = z.object({
  appearance_sets: z.array(NameIdKeySchema),
  slots: z.array(SlotSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
