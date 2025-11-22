import { z } from 'zod';

export const GenderSchema = z.object({
  name: z.union([z.literal('Female'), z.literal('Male')]),
  type: z.union([z.literal('FEMALE'), z.literal('MALE')]),
});
