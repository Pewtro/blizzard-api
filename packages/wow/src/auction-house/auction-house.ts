import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { AuctionHouseCommoditiesResponse, AuctionHouseResponse } from './types';

export const auctionHouseApi = {
  /**
   * Get auction house data for a connected realm.
   * @param connectedRealmId The ID of the connected realm.
   * @returns The auction house data. See {@link AuctionHouseResponse}.
   */
  auctions: (connectedRealmId: number): Resource<AuctionHouseResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/auctions`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get auction house data for all connected realms.
   * @returns The auction house data. See {@link AuctionHouseResponse}.
   */
  commodities: (): Resource<AuctionHouseCommoditiesResponse> => {
    return {
      path: `${base}/auctions/commodities`,
      namespace: 'dynamic',
    };
  },
};
