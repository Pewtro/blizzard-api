import { achievements } from './achievements';
import { auctionHouse } from './auction-house';
import { connectedRealm } from './connected-realm';

export const wow = {
  ...achievements,
  ...auctionHouse,
  ...connectedRealm,
};

//Achievements
export * from './achievements/types.js';
//Auction House
export * from './auction-house/types.js';
//Connected Realm
export * from './connected-realm/types.js';
