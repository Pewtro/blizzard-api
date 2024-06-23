import { auctionHouseIndex, auctions } from './auction-house/auction-house';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from './connected-realm/connected-realm';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from './creature/creature';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './guild-crest/guild-crest';
import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSubClass } from './item/item';
import { mediaSearch } from './media-search/media-search';
import { playableClass, playableClassIndex, playableClassMedia } from './playable-class/playable-class';
import { playableRace, playableRaceIndex } from './playable-race/playable-race';
import { powerType, powerTypeIndex } from './power-type/power-type';
import {
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRegionalSeason,
  pvpRegionalSeasonIndex,
  pvpRegionIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
} from './pvp-season/pvp-season';
import { realm, realmIndex, realmSearch } from './realm/realm';
import { region, regionIndex } from './region/region';

export const classicWow = {
  //Auction House
  auctionHouseIndex,
  auctions,
  //Connected Realm
  connectedRealm,
  connectedRealmIndex,
  connectedRealmSearch,
  //Creature
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
  //Guild Crest
  guildCrestBorder,
  guildCrestComponentsIndex,
  guildCrestEmblem,
  //Item
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSubClass,
  //Media Search
  mediaSearch,
  //Playable Class
  playableClass,
  playableClassIndex,
  playableClassMedia,
  //Playable Race
  playableRace,
  playableRaceIndex,
  //Power Type
  powerType,
  powerTypeIndex,
  //Pvp Season
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRegionalSeason,
  pvpRegionalSeasonIndex,
  pvpRegionIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
  //Realm
  realm,
  realmIndex,
  realmSearch,
  //Region
  region,
  regionIndex,
};

//Auction House
export * from './auction-house/auction-house';
export type * from './auction-house/types';
//Connected Realm
export * from './connected-realm/connected-realm';
export type * from './connected-realm/types';
//Creature
export * from './creature/creature';
export type * from './creature/types';
//Guild Crest
export * from './guild-crest/guild-crest';
export type * from './guild-crest/types';
//Item
export * from './item/item';
export type * from './item/types';
//Media Search
export * from './media-search/media-search';
export type * from './media-search/types';
//Playable Class
export * from './playable-class/playable-class';
export type * from './playable-class/types';
//Playable Race
export * from './playable-race/playable-race';
export type * from './playable-race/types';
//Power Type
export * from './power-type/power-type';
export type * from './power-type/types';
//Pvp Season
export * from './pvp-season/pvp-season';
export type * from './pvp-season/types';
//Realm
export * from './realm/realm';
export type * from './realm/types';
//Region
export * from './region/region';
export type * from './region/types';
