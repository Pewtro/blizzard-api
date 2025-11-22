import { z } from 'zod';

export const QualitySchema = z.object({
  name: z.union([z.literal('Common'), z.literal('Poor'), z.literal('Rare'), z.literal('Uncommon')]),
  type: z.union([z.literal('COMMON'), z.literal('POOR'), z.literal('RARE'), z.literal('UNCOMMON')]),
});
