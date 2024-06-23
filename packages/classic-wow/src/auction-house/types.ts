import type { NameId, NameIdKey, ResponseBase } from '../../../wow/src/base';

export interface AuctionHouseIndexResponse extends ResponseBase {
  auctions: Array<NameIdKey>;
}

export interface AuctionsResponse extends ResponseBase, NameId {
  auctions: Array<Auction>;
  connected_realm: { href: string };
}

interface Auction {
  bid: number;
  buyout: number;
  id: number;
  item: { id: number; rand?: number; seed?: number };
  quantity: number;
  time_left: 'LONG' | 'MEDIUM' | 'SHORT' | 'VERY_LONG';
}
