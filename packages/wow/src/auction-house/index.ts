import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { AuctionHouseCommoditiesResponse, AuctionHouseResponse } from './types';

export const auctionHouse = {
  auctions: (connectedRealmId: number): Resource<AuctionHouseResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/auctions`,
      namespace: 'dynamic',
    };
  },
  commodities: (): Resource<AuctionHouseCommoditiesResponse> => {
    return {
      path: `${base}/auctions/commodities`,
      namespace: 'dynamic',
    };
  },
};
