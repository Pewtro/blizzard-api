import { z } from 'zod';
import { AuctionHousePostingSchema } from './auction-house-posting-schema';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const AuctionHouseResponseSchema = z.object({
  auctions: z.array(AuctionHousePostingSchema),
  commodities: __typeSchema,
  connected_realm: __typeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
