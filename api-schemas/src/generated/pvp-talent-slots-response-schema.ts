import { z } from 'zod';
import { TalentSlotSchema } from './talent-slot-schema';
import { HrefSchema } from './href-schema';

export const PvpTalentSlotsResponseSchema = z.object({
  talent_slots: z.array(TalentSlotSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
