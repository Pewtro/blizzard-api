import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './achievements/index';
import { auctionHouseIndex, auctions } from './auction-house/index';
import { characterAchievementsSummary, characterAchievementStatistics } from './character-achievements/index';
import { characterEquipmentSummary } from './character-equipment/index';
import { characterHunterPetsSummary } from './character-hunter-pets/index';
import { characterMediaSummary } from './character-media/index';
import { characterProfileStatus, characterProfileSummary } from './character-profile/index';
import { characterPvpBracketStatistics } from './character-pvp/index';
import { characterReputationsSummary } from './character-reputations/index';
import { characterSpecializationsSummary } from './character-specializations/index';
import { characterStatisticsSummary } from './character-statistics/index';
import {
  connectedRealm,
  connectedRealmAuctions,
  connectedRealmIndex,
  connectedRealmSearch,
} from './connected-realm/index';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from './creature/index';
import { guildCrestBorder, guildCrestComponentsIndex, guildCrestEmblem } from './guild-crest/index';
import { guild, guildAchievements, guildActivity, guildRoster } from './guild/index';
import { item, itemClass, itemClassIndex, itemMedia, itemSearch, itemSubclass } from './item/index';
import { mediaSearch } from './media-search/index';
import {
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from './mythic-keystone-dungeon/index';
import { mythicKeystoneLeaderboard, mythicKeystoneLeaderboardIndex } from './mythic-keystone-leaderboard/index';
import { playableClass, playableClassIndex, playableClassMedia } from './playable-class/index';
import { playableRace, playableRaceIndex } from './playable-race/index';
import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from './playable-specialization/index';
import { powerType, powerTypeIndex } from './power-type/index';
import {
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRegionalSeason,
  pvpRegionalSeasonIndex,
  pvpRegionIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
  pvpSeasonLeaderboard,
  pvpSeasonLeaderboards,
  pvpSeasonRewards,
} from './pvp-season/index';
import { realm, realmIndex, realmSearch } from './realm/index';
import { region, regionIndex } from './region/index';
import { wowToken } from './wow-token/index';

const classicWow = {
  //Achievements
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
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
  //Character PvP
  characterPvpBracketStatistics,
  //Character Reputations
  characterReputationsSummary,
  //Character Specialization
  characterSpecializationsSummary,
  //Character Statistics
  characterStatisticsSummary,
  //Connected Realm
  connectedRealm,
  connectedRealmAuctions,
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
  itemSubclass,
  //Media Search
  mediaSearch,
  //Mythic Keystone Dungeon
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
  //Mythic Keystone Leaderboard
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
  //Playable Class
  playableClass,
  playableClassIndex,
  playableClassMedia,
  //Playable Race
  playableRace,
  playableRaceIndex,
  //Playable Specialization
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
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
  pvpSeasonLeaderboard,
  pvpSeasonLeaderboards,
  pvpSeasonRewards,
  //Realm
  realm,
  realmIndex,
  realmSearch,
  //Region
  region,
  regionIndex,
  //WoW Token
  wowToken,
};
export default classicWow;
export { classicWow };

//Achievements
export * from './achievements/index';
export type * from './achievements/types';
//Auction House
export * from './auction-house/index';
export type * from './auction-house/types';
//Character Achievements
export * from './character-achievements/index';
export type * from './character-achievements/types';
//Character Equipment
export * from './character-equipment/index';
export type * from './character-equipment/types';
//Character Hunter Pets
export * from './character-hunter-pets/index';
export type * from './character-hunter-pets/types';
//Character Media
export * from './character-media/index';
export type * from './character-media/types';
//Character Profile
export * from './character-profile/index';
export type * from './character-profile/types';
//Character PvP
export * from './character-pvp/index';
export type * from './character-pvp/types';
//Character Reputations
export * from './character-reputations/index';
export type * from './character-reputations/types';
//Character Specialization
export * from './character-specializations/index';
export type * from './character-specializations/types';
//Character Statistics
export * from './character-statistics/index';
export type * from './character-statistics/types';
//Connected Realm
export * from './connected-realm/index';
export type * from './connected-realm/types';
//Creature
export * from './creature/index';
export type * from './creature/types';
//Guild
export * from './guild/index';
export type * from './guild/types';
//Guild Crest
export * from './guild-crest/index';
export type * from './guild-crest/types';
//Item
export * from './item/index';
export type * from './item/types';
//Media Search
export * from './media-search/index';
export type * from './media-search/types';
//Mythic Keystone Dungeon
export * from './mythic-keystone-dungeon/index';
export type * from './mythic-keystone-dungeon/types';
//Mythic Keystone Leaderboard
export * from './mythic-keystone-leaderboard/index';
export type * from './mythic-keystone-leaderboard/types';
//Playable Class
export * from './playable-class/index';
export type * from './playable-class/types';
//Playable Race
export * from './playable-race/index';
export type * from './playable-race/types';
//Playable Specialization
export * from './playable-specialization/index';
export type * from './playable-specialization/types';
//Power Type
export * from './power-type/index';
export type * from './power-type/types';
//Pvp Season
export * from './pvp-season/index';
export type * from './pvp-season/types';
//Realm
export * from './realm/index';
export type * from './realm/types';
//Region
export * from './region/index';
export type * from './region/types';
//WoW Token
export * from './wow-token/index';
export type * from './wow-token/types';
