import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { LoadoutSchema } from './loadout-schema';
import { PvpTalentSlotSchema } from './pvp-talent-slot-schema';

export const SpecializationSchema = z.object({
  glyphs: z.union([z.any(), z.array(NameIdKeySchema)]).optional(),
  loadouts: z.array(LoadoutSchema),
  pvp_talent_slots: z.union([z.any(), z.array(PvpTalentSlotSchema)]).optional(),
  specialization: NameIdKeySchema,
});
