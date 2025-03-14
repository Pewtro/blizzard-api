import { auctionHouseIndex, auctions } from './auction-house/auction-house';
import {
  characterAchievementsSummary,
  characterAchievementStatistics,
} from './character-achievements/character-achievements';
import { characterEquipmentSummary } from './character-equipment/character-equipment';
import { characterHunterPetsSummary } from './character-hunter-pets/character-hunter-pets';
import { characterMediaSummary } from './character-media/character-media';
import { characterProfileStatus, characterProfileSummary } from './character-profile/character-profile';
import { characterSpecializationsSummary } from './character-specialization/character-specialization';
import { characterStatisticsSummary } from './character-statistics/character-statistics';
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
import { guild, guildAchievements, guildActivity, guildRoster } from './guild/guild';
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

const classicWow = {
  //Auction House
  auctionHouseIndex,
  auctions,
  //Character Achievements
  characterAchievementsSummary,
  characterAchievementStatistics,
  //Character Equipment
  characterEquipmentSummary,
  //Character Hunter Pets
  characterHunterPetsSummary,
  //Character Media
  characterMediaSummary,
  //Character Profile
  characterProfileStatus,
  characterProfileSummary,
  //Character Specialization
  characterSpecializationsSummary,
  //Character Statistics
  characterStatisticsSummary,
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
  //Guild
  guild,
  guildAchievements,
  guildActivity,
  guildRoster,
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
export default classicWow;
export { classicWow };

//Auction House
export * from './auction-house/auction-house';
export type * from './auction-house/types';
//Character Achievements
export * from './character-achievements/character-achievements';
export type * from './character-achievements/types';
//Character Equipment
export * from './character-equipment/character-equipment';
export type * from './character-equipment/types';
//Character Hunter Pets
export * from './character-hunter-pets/character-hunter-pets';
export type * from './character-hunter-pets/types';
//Character Media
export * from './character-media/character-media';
export type * from './character-media/types';
//Character Profile
export * from './character-profile/character-profile';
export type * from './character-profile/types';
//Character Specialization
export * from './character-specialization/character-specialization';
export type * from './character-specialization/types';
//Character Statistics
export * from './character-statistics/character-statistics';
export type * from './character-statistics/types';
//Connected Realm
export * from './connected-realm/connected-realm';
export type * from './connected-realm/types';
//Creature
export * from './creature/creature';
export type * from './creature/types';
//Guild
export * from './guild/guild';
export type * from './guild/types';
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
