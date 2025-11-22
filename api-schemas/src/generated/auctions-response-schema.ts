import { z } from 'zod';
import { AuctionSchema } from './auction-schema';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const AuctionsResponseSchema = z.object({
  auctions: z.array(AuctionSchema),
  connected_realm: __typeSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
