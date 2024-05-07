import type { NameId, NameIdKey, ResponseBase } from '../../../wow/src/base';

export interface AuctionHouseIndexResponse extends ResponseBase {
  auctions: Array<NameIdKey>;
}

export interface AuctionsResponse extends ResponseBase, NameId {
  auctions: Array<Auction>;
  connected_realm: { href: string };
}

interface Auction {
  id: number;
  item: { id: number; rand?: number; seed?: number };
  bid: number;
  buyout: number;
  quantity: number;
  time_left: 'SHORT' | 'MEDIUM' | 'LONG' | 'VERY_LONG';
}
