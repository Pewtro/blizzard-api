import type { ResponseBase } from '../base';

type AuctionHouseTimeLeft = 'SHORT' | 'MEDIUM' | 'LONG' | 'VERY_LONG';

interface AuctionHousePosting {
  id: number;
  item: {
    id: number;
    context: number;
    bonus_lists: Array<number>;
    modifiers: Array<{ type: number; value: number }>;
  };
  bid: number;
  buyout: number;
  quantity: number;
  time_left: AuctionHouseTimeLeft;
}

export interface AuctionHouseResponse extends ResponseBase {
  connected_realm: {
    href: string;
  };
  commodities: {
    href: string;
  };
  auctions: Array<AuctionHousePosting>;
}

interface AuctionHouseCommodity {
  id: number;
  item: { id: number };
  quantity: number;
  unit_price: number;
  time_left: AuctionHouseTimeLeft;
}

export interface AuctionHouseCommoditiesResponse extends ResponseBase {
  auctions: Array<AuctionHouseCommodity>;
}
