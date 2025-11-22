import { z } from 'zod';
import { AuctionHouseCommoditySchema } from './auction-house-commodity-schema';
import { HrefSchema } from './href-schema';

export const AuctionHouseCommoditiesResponseSchema = z.object({
  auctions: z.array(AuctionHouseCommoditySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
