import { z } from 'zod';

export const NodeTypeSchema = z.object({
  id: z.number(),
  type: z.union([z.literal('ACTIVE'), z.literal('CHOICE'), z.literal('PASSIVE')]),
});
