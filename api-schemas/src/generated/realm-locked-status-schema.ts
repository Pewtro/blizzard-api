import { z } from 'zod';

export const RealmLockedStatusSchema = z.object({
  is_locked_for_new_characters: z.boolean(),
  is_locked_for_pct: z.boolean(),
});
