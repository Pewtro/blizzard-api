import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { AuctionHouseCommoditiesResponse, AuctionHouseIndexResponse, AuctionHouseResponse } from './types';

/**
 * Get the auction houses of a ruleset.
 * @param rulesetId The ruleset ID.
 * @returns The auction house index. See {@link AuctionHouseIndexResponse}.
 */
export function auctionHouseIndex(rulesetId: number): Resource<AuctionHouseIndexResponse> {
  return {
    namespace: 'dynamic-forever',
    path: `${wowBasePath}/ruleset/${encodeURIComponent(rulesetId)}/auctions/index`,
  };
}
/**
 * Get the auctions of an auction house.
 * @param rulesetId The ruleset ID.
 * @param auctionHouseId The auction house ID.
 * @returns The auction house data. See {@link AuctionHouseResponse}.
 */
export function auctions(rulesetId: number, auctionHouseId: number): Resource<AuctionHouseResponse> {
  return {
    namespace: 'dynamic-forever',
    path: `${wowBasePath}/ruleset/${encodeURIComponent(rulesetId)}/auctions/${encodeURIComponent(auctionHouseId)}`,
  };
}
/**
 * Get the commodities of an auction house.
 * @param rulesetId The ruleset ID.
 * @param auctionHouseId The auction house ID.
 * @returns The auction house commodities. See {@link AuctionHouseCommoditiesResponse}.
 */
export function commodities(rulesetId: number, auctionHouseId: number): Resource<AuctionHouseCommoditiesResponse> {
  return {
    namespace: 'dynamic-forever',
    path: `${wowBasePath}/ruleset/${encodeURIComponent(rulesetId)}/auctions/${encodeURIComponent(auctionHouseId)}/commodities`,
  };
}
