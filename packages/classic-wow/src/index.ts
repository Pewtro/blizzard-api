import { auctionHouseApi } from './auction-house/auction-house';
import { connectedRealmApi } from './connected-realm/connected-realm';

export const classicWow = {
  ...auctionHouseApi,
  ...connectedRealmApi,
};

//Auction House
export * from './auction-house/types';
//Connected Realm
export * from './connected-realm/types';
