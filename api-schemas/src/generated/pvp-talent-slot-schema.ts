import { z } from 'zod';
import { SelectedSchema } from './selected-schema';

export const PvpTalentSlotSchema = z.object({
  selected: SelectedSchema,
  slot_number: z.number(),
});
