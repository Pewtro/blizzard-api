import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type { AuctionHouseIndexResponse, AuctionsResponse } from './types';

/**
 * Returns an index of auction houses for a connected realm.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param connectedRealmId The ID of the connected realm.
 * @returns The auction house index. See {@link AuctionHouseIndexResponse}.
 */
export function auctionHouseIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  connectedRealmId: number,
): Resource<AuctionHouseIndexResponse> {
  return {
    namespace,
    path: `${base}/connected-realm/${connectedRealmId}/auctions/index`,
  };
}
/**
 * Returns all active auctions for a specific auction house on a connected realm.
 *
 * Auction house data updates at a set interval. The value was initially set at 1 hour; however, it might change over time without notice.
 *
 * Depending on the number of active auctions on the specified connected realm, the response from this endpoint may be rather large, sometimes exceeding 10 MB.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param connectedRealmId The ID of the connected realm.
 * @param auctionHouseId The ID of the auction house.
 * @returns The auction house data. See {@link AuctionsResponse}.
 */
export function auctions(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  connectedRealmId: number,
  auctionHouseId: number,
): Resource<AuctionsResponse> {
  return {
    namespace,
    path: `${base}/connected-realm/${connectedRealmId}/auctions/${auctionHouseId}`,
  };
}
