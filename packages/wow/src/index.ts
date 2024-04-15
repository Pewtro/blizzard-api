import { achievementApi } from './achievements/achievements';
import { auctionHouseApi } from './auction-house/auction-house';
import { azeriteEssenceApi } from './azerite-essence/azerite-essence';
import { connectedRealmApi } from './connected-realm/connected-realm';
import { covenantApi } from './covenant/covenant';
import { creatureApi } from './creature/creature';
import { guildCrestApi } from './guild-crest/guild-crest';
import { heirloomApi } from './heirloom/heirloom';
import { itemApi } from './item/item';
import { journalApi } from './journal/journal';
import { mediaSearchApi } from './media-search/media-search';
import { modifiedCraftingApi } from './modified-crafting/modified-crafting';
import { mountApi } from './mount/mount';
import { mythicKeystoneAffixApi } from './mythic-keystone-affix/mythic-keystone-affix';
import { mythicKeystoneDungeonApi } from './mythic-keystone-dungeon/mythic-keystone-dungeon';
import { mythicKeystoneLeaderboardApi } from './mythic-keystone-leaderboard/mythic-keystone-leaderboard';
import { mythicRaidLeaderboardApi } from './mythic-raid-leaderboard/mythic-raid-leaderboard';
import { petApi } from './pet/pet';
import { playableClassApi } from './playable-class/playable-class';
import { playableRaceApi } from './playable-race/playable-race';
import { playableSpecializationApi } from './playable-specialization/playable-specialization';
import { powerTypeApi } from './power-type/power-type';
import { professionApi } from './profession/profession';
import { pvpSeasonApi } from './pvp-season/pvp-season';
import { pvpTierApi } from './pvp-tier/pvp-tier';
import { questApi } from './quest/quest';
import { realmApi } from './realm/realm';
import { regionApi } from './region/region';
import { reputationApi } from './reputations/reputations';
import { spellApi } from './spell/spell';
import { talentApi } from './talent/talent';
import { techTalentApi } from './tech-talent/tech-talent';
import { titleApi } from './title/title';
import { toyApi } from './toy/toy';
import { wowTokenApi } from './wow-token/wow-token';

export const wow = {
  ...achievementApi,
  ...auctionHouseApi,
  ...azeriteEssenceApi,
  ...connectedRealmApi,
  ...covenantApi,
  ...creatureApi,
  ...guildCrestApi,
  ...heirloomApi,
  ...itemApi,
  ...journalApi,
  ...mediaSearchApi,
  ...modifiedCraftingApi,
  ...mountApi,
  ...mythicKeystoneAffixApi,
  ...mythicKeystoneDungeonApi,
  ...mythicKeystoneLeaderboardApi,
  ...mythicRaidLeaderboardApi,
  ...petApi,
  ...playableClassApi,
  ...playableRaceApi,
  ...playableSpecializationApi,
  ...powerTypeApi,
  ...professionApi,
  ...pvpSeasonApi,
  ...pvpTierApi,
  ...questApi,
  ...realmApi,
  ...regionApi,
  ...reputationApi,
  ...spellApi,
  ...talentApi,
  ...techTalentApi,
  ...titleApi,
  ...toyApi,
  ...wowTokenApi,
};

//Achievements
export * from './achievements/types.js';
//Auction House
export * from './auction-house/types.js';
//Azerite Essence
export * from './azerite-essence/types.js';
//Connected Realm
export * from './connected-realm/types.js';
//Covenant
export * from './covenant/types.js';
//Creature
export * from './creature/types.js';
//Guild Crest
export * from './guild-crest/types.js';
//Heirloom
export * from './heirloom/types.js';
//Item
export * from './item/types.js';
//Journal
export * from './journal/types.js';
//Media Search
//TODO
//Modified Crafting
export * from './modified-crafting/types.js';
//Mount
export * from './mount/types.js';
//Mythic Keystone Affix
export * from './mythic-keystone-affix/types.js';
//Mythic Keystone Dungeon
export * from './mythic-keystone-dungeon/types.js';
//Mythic Keystone Leaderboard
export * from './mythic-keystone-leaderboard/types.js';
//Mythic Raid Leaderboard
export * from './mythic-raid-leaderboard/types.js';
//Pet
export * from './pet/types.js';
//Playable Class
export * from './playable-class/types.js';
//Playable Race
export * from './playable-race/types.js';
//Playable Specialization
export * from './playable-specialization/types.js';
//Power Type
export * from './power-type/types.js';
//Profession
export * from './profession/types.js';
//Pvp Season
export * from './pvp-season/types.js';
//Pvp Tier
export * from './pvp-tier/types.js';
//Quest
export * from './quest/types.js';
//Realm
export * from './realm/types.js';
//Region
export * from './region/types.js';
//Reputations
export * from './reputations/types.js';
//Spell
export * from './spell/types.js';
//Talent
export * from './talent/types.js';
//Tech Talent
export * from './tech-talent/types.js';
//Title
export * from './title/types.js';
//Toy
export * from './toy/types.js';
//WoW Token
export * from './wow-token/types.js';
