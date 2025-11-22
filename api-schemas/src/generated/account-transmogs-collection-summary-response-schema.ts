import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { SlotSchema } from './slot-schema';

export const AccountTransmogsCollectionSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  appearance_sets: z.array(NameIdKeySchema),
  slots: z.array(SlotSchema),
});
