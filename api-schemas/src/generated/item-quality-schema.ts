import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const ItemQualitySchema = z.object({
  name: __typeSchema,
  type: z.union([
    z.literal('COMMON'),
    z.literal('POOR'),
    z.literal('RARE'),
    z.literal('UNCOMMON'),
    z.literal('ARTIFACT'),
    z.literal('EPIC'),
    z.literal('HEIRLOOM'),
    z.literal('LEGENDARY'),
  ]),
});
