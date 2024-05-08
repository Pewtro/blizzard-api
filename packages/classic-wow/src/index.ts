import { classicAuctionHouseApi } from './auction-house/auction-house';
import { classicConnectedRealmApi } from './connected-realm/connected-realm';
import { classicCreatureApi } from './creature/creature';
import { classicGuildCrestApi } from './guild-crest/guild-crest';
import { classicItemApi } from './item/item';
import { classicMediaSearchApi } from './media-search/media-search';
import { classicPlayableClassApi } from './playable-class/playable-class';
import { classicPlayableRaceApi } from './playable-race/playable-race';
import { classicPowerTypeApi } from './power-type/power-type';
import { classicPvpSeasonApi } from './pvp-season/pvp-season';
import { classicRealmApi } from './realm/realm';
import { classicRegionApi } from './region/region';

export const classicWow = {
  ...classicAuctionHouseApi,
  ...classicConnectedRealmApi,
  ...classicCreatureApi,
  ...classicGuildCrestApi,
  ...classicItemApi,
  ...classicMediaSearchApi,
  ...classicPlayableClassApi,
  ...classicPlayableRaceApi,
  ...classicPowerTypeApi,
  ...classicPvpSeasonApi,
  ...classicRealmApi,
  ...classicRegionApi,
};

//Auction House
export type * from './auction-house/types';
//Connected Realm
export type * from './connected-realm/types';
//Creature
export type * from './creature/types';
//Guild Crest
export type * from './guild-crest/types';
//Item
export type * from './item/types.js';
//Media Search
export type * from './media-search/types';
//Playable Class
export type * from './playable-class/types';
//Playable Race
export type * from './playable-race/types.js';
//Power Type
export type * from './power-type/types';
//Pvp Season
export type * from './pvp-season/types';
//Realm
export type * from './realm/types';
//Region
export type * from './region/types';
