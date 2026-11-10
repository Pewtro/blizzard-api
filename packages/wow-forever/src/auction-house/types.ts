import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for an auction house commodities endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AuctionHouseCommoditiesResponse extends ResponseBase {
  auctions?: Array<AuctionHouseCommodity>;
}

/**
 * The response for an auction house index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AuctionHouseIndexResponse extends ResponseBase {
  auctions: Array<NameIdKey>;
}

/**
 * The response for an auction house.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AuctionHouseResponse extends ResponseBase {
  auctions?: Array<AuctionHousePosting>;
  commodities: Href;
  id: number;
  name: string;
  ruleset: Href;
}

interface AuctionHouseCommodity {
  id: number;
  item: AuctionHouseItem;
  quantity: number;
  time_left: AuctionHouseTimeLeft;
  unit_price: number;
}

interface AuctionHouseItem {
  bonus_lists?: Array<number>;
  context?: number;
  id: number;
  modifiers?: Array<AuctionHouseItemModifier>;
}

interface AuctionHouseItemModifier {
  type: number;
  value: number;
}

interface AuctionHousePosting {
  bid?: number;
  buyout?: number;
  id: number;
  item: AuctionHouseItem;
  quantity: number;
  time_left: AuctionHouseTimeLeft;
}

type AuctionHouseTimeLeft = 'LONG' | 'MEDIUM' | 'SHORT' | 'VERY_LONG';
