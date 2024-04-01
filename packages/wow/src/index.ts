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
//Connected Realm
export * from './connected-realm/types.js';
