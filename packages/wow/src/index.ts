import { achievementApi } from './achievements/achievements';
import { auctionHouseApi } from './auction-house/auction-house';
import { azeriteEssenceApi } from './azerite-essence/azerite-essence';
import { connectedRealmApi } from './connected-realm/connected-realm';
import { covenantApi } from './covenant/covenant';
import { creatureApi } from './creature/creature';

export const wow = {
  ...achievementApi,
  ...auctionHouseApi,
  ...azeriteEssenceApi,
  ...connectedRealmApi,
  ...covenantApi,
  ...creatureApi,
};

//Achievements
export * from './achievements/types.js';
//Auction House
export * from './auction-house/types.js';
//Connected Realm
export * from './connected-realm/types.js';
