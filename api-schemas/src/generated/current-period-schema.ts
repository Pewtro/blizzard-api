import { z } from 'zod';

export const CurrentPeriodSchema = z.object({
  period: z.any(),
});
