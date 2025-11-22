import { z } from 'zod';

export const TalentSlotSchema = z.object({
  slot_number: z.number(),
  unlock_player_level: z.number(),
});
