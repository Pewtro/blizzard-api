import { z } from 'zod';

export const DisplayStringsSchema = z.object({
  copper: z.string(),
  gold: z.string(),
  header: z.string(),
  silver: z.string(),
});
