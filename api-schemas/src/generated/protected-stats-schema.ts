import { z } from 'zod';

export const ProtectedStatsSchema = z.object({
  level_gold_gained: z.number(),
  level_gold_lost: z.number(),
  level_item_value_gained: z.number(),
  level_number_deaths: z.number(),
  total_gold_gained: z.number(),
  total_gold_lost: z.number(),
  total_item_value_gained: z.number(),
  total_number_deaths: z.number(),
});
