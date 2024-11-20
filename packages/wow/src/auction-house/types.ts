import type { ResponseBase } from '../base';

/**
 * Interface for a response from the auction house commodities endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AuctionHouseCommoditiesResponse extends ResponseBase {
  auctions: Array<AuctionHouseCommodity>;
}

/**
 * Interface for a response from the auction house endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AuctionHouseResponse extends ResponseBase {
  auctions: Array<AuctionHousePosting>;
  commodities: {
    href: string;
  };
  connected_realm: {
    href: string;
  };
}

interface AuctionHouseCommodity {
  id: number;
  item: { id: number };
  quantity: number;
  time_left: AuctionHouseTimeLeft;
  unit_price: number;
}

interface AuctionHousePosting {
  bid: number;
  buyout: number;
  id: number;
  item: {
    bonus_lists: Array<number>;
    context: number;
    id: number;
    modifiers: Array<{ type: number; value: number }>;
  };
  quantity: number;
  time_left: AuctionHouseTimeLeft;
}

type AuctionHouseTimeLeft = 'LONG' | 'MEDIUM' | 'SHORT' | 'VERY_LONG';
