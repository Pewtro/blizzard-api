import { z } from 'zod';
import { __typeSchema } from './type-schema';

export const AuctionHouseCommoditySchema = z.object({
  id: z.number(),
  item: __typeSchema,
  quantity: z.number(),
  time_left: z.union([z.literal('LONG'), z.literal('MEDIUM'), z.literal('SHORT'), z.literal('VERY_LONG')]),
  unit_price: z.number(),
});
