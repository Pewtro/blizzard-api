import {
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
  protectedCharacterProfileSummary,
} from './account-profile/account-profile';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './achievements/achievements';
import { auctions, commodities } from './auction-house/auction-house';
import {
  azeriteEssence,
  azeriteEssenceIndex,
  azeriteEssenceMedia,
  azeriteEssenceSearch,
} from './azerite-essence/azerite-essence';
import {
  characterAchievementsSummary,
  characterAchievementStatistics,
} from './character-achievements/character-achievements';
import { characterAppearanceSummary } from './character-appearance/character-appearance';
import {
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from './character-collections/character-collections';
import {
  characterDungeons,
  characterEncountersSummary,
  characterRaids,
} from './character-encounters/character-encounters';
import { characterEquipmentSummary } from './character-equipment/character-equipment';
import { characterHunterPetsSummary } from './character-hunter-pets/character-hunter-pets';
import { characterMediaSummary } from './character-media/character-media';
import {
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
} from './character-mythic-keystone-profile/character-mythic-keystone-profile';
import { characterProfessionsSummary } from './character-professions/character-professions';
import { characterProfileStatus, characterProfileSummary } from './character-profile/character-profile';
import { characterPvpSummary } from './character-pvp/character-pvp';
import { characterCompletedQuests, characterQuests } from './character-quests/character-quests';
import { characterReputationsSummary } from './character-reputations/character-reputations';
import { characterSoulbinds } from './character-soulbinds/character-soulbinds';
import { characterSpecializationsSummary } from './character-specializations/character-specializations';
import { characterStatisticsSummary } from './character-statistics/character-statistics';
import { characterTitlesSummary } from './character-titles/character-titles';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from './connected-realm/connected-realm';
import {
  conduit,
  conduitIndex,
  covenant,
  covenantIndex,
  covenantMedia,
  soulbind,
  soulbindIndex,
} from './covenant/covenant';
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
import { heirloom, heirloomIndex } from './heirloom/heirloom';
import {
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubClass,
} from './item/item';
import {
  journalEncounter,
  journalEncounterIndex,
  journalEncounterSearch,
  journalExpansion,
  journalExpansionIndex,
  journalInstance,
  journalInstanceIndex,
  journalInstanceMedia,
} from './journal/journal';
import { mediaSearch } from './media-search/media-search';
import {
  modifiedCraftingCategory,
  modifiedCraftingCategoryIndex,
  modifiedCraftingIndex,
  modifiedCraftingReagentSlotType,
  modifiedCraftingReagentSlotTypeIndex,
} from './modified-crafting/modified-crafting';
import { mount, mountIndex, mountSearch } from './mount/mount';
import {
  mythicKeystoneAffix,
  mythicKeystoneAffixIndex,
  mythicKeystoneAffixMedia,
} from './mythic-keystone-affix/mythic-keystone-affix';
import {
  mythicKeystoneDungeon,
  mythicKeystoneDungeonIndex,
  mythicKeystoneIndex,
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from './mythic-keystone-dungeon/mythic-keystone-dungeon';
import {
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
} from './mythic-keystone-leaderboard/mythic-keystone-leaderboard';
import { mythicRaidLeaderboard } from './mythic-raid-leaderboard/mythic-raid-leaderboard';
import { pet, petAbility, petAbilityIndex, petAbilityMedia, petIndex, petMedia } from './pet/pet';
import { playableClass, playableClassIndex, playableClassMedia, pvpTalentSlots } from './playable-class/playable-class';
import { playableRace, playableRaceIndex } from './playable-race/playable-race';
import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from './playable-specialization/playable-specialization';
import { powerType, powerTypeIndex } from './power-type/power-type';
import {
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
} from './profession/profession';
import {
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
} from './pvp-season/pvp-season';
import { pvpTier, pvpTierIndex, pvpTierMedia } from './pvp-tier/pvp-tier';
import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from './quest/quest';
import { realm, realmIndex, realmSearch } from './realm/realm';
import { region, regionIndex } from './region/region';
import {
  reputationFaction,
  reputationFactionIndex,
  reputationTiers,
  reputationTiersIndex,
} from './reputations/reputations';
import { spell, spellMedia, spellSearch } from './spell/spell';
import { pvpTalent, pvpTalentIndex, talentIndex, talentTree, talentTreeIndex, talentTreeNodes } from './talent/talent';
import {
  techTalent,
  techTalentIndex,
  techTalentMedia,
  techTalentTree,
  techTalentTreeIndex,
} from './tech-talent/tech-talent';
import { title, titleIndex } from './title/title';
import { toy, toyIndex } from './toy/toy';
import { wowToken } from './wow-token/wow-token';

/**
 * The Blizzard API for World of Warcraft.
 * @see https://develop.battle.net/documentation/world-of-warcraft
 */
const wow = {
  //Account Profile
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
  protectedCharacterProfileSummary,
  //Achievements
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
  //Auction House
  auctions,
  commodities,
  //Azerite Essence
  azeriteEssence,
  azeriteEssenceIndex,
  azeriteEssenceMedia,
  azeriteEssenceSearch,
  //Character Achievements
  characterAchievementsSummary,
  characterAchievementStatistics,
  //Character Appearance
  characterAppearanceSummary,
  //Character Collections
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
  //Character Encounters
  characterDungeons,
  characterEncountersSummary,
  characterRaids,
  //Character Equipment
  characterEquipmentSummary,
  //Character Hunter Pets
  characterHunterPetsSummary,
  //Character Media
  characterMediaSummary,
  //Character Mythic Keystone Profile
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
  //Character Professions
  characterProfessionsSummary,
  //Character Profile
  characterProfileStatus,
  characterProfileSummary,
  //Character PvP
  characterPvpSummary,
  //Character Quests
  characterCompletedQuests,
  characterQuests,
  //Character Reputations
  characterReputationsSummary,
  //Character Soulbinds
  characterSoulbinds,
  //Character Specializations
  characterSpecializationsSummary,
  //Character Statistics
  characterStatisticsSummary,
  //Character Titles
  characterTitlesSummary,
  //Connected Realm
  connectedRealm,
  connectedRealmIndex,
  connectedRealmSearch,
  //Covenant
  conduit,
  conduitIndex,
  covenant,
  covenantIndex,
  covenantMedia,
  soulbind,
  soulbindIndex,
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
  //Heirloom
  heirloom,
  heirloomIndex,
  //Item
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubClass,
  //Journal
  journalEncounter,
  journalEncounterIndex,
  journalEncounterSearch,
  journalExpansion,
  journalExpansionIndex,
  journalInstance,
  journalInstanceIndex,
  journalInstanceMedia,
  //Media Search
  mediaSearch,
  //Modified Crafting
  modifiedCraftingCategory,
  modifiedCraftingCategoryIndex,
  modifiedCraftingIndex,
  modifiedCraftingReagentSlotType,
  modifiedCraftingReagentSlotTypeIndex,
  //Mount
  mount,
  mountIndex,
  mountSearch,
  //Mythic Keystone Affix
  mythicKeystoneAffix,
  mythicKeystoneAffixIndex,
  mythicKeystoneAffixMedia,
  //Mythic Keystone Dungeon
  mythicKeystoneDungeon,
  mythicKeystoneDungeonIndex,
  mythicKeystoneIndex,
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
  //Mythic Keystone Leaderboard
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
  //Mythic Raid Leaderboard
  mythicRaidLeaderboard,
  //Pet
  pet,
  petAbility,
  petAbilityIndex,
  petAbilityMedia,
  petIndex,
  petMedia,
  //Playable Class
  playableClass,
  playableClassIndex,
  playableClassMedia,
  pvpTalentSlots,
  //Playable
  playableRace,
  playableRaceIndex,
  //Playable Specialization
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
  //Power Type
  powerType,
  powerTypeIndex,
  //Profession
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
  //Pvp Season
  pvpLeaderboard,
  pvpLeaderboardIndex,
  pvpRewardsIndex,
  pvpSeason,
  pvpSeasonIndex,
  //Pvp Tier
  pvpTier,
  pvpTierIndex,
  pvpTierMedia,
  //Quest
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
  //Realm
  realm,
  realmIndex,
  realmSearch,
  //Region
  region,
  regionIndex,
  //Reputations
  reputationFaction,
  reputationFactionIndex,
  reputationTiers,
  reputationTiersIndex,
  //Spell
  spell,
  spellMedia,
  spellSearch,
  //Talent
  pvpTalent,
  pvpTalentIndex,
  talentIndex,
  talentTree,
  talentTreeIndex,
  talentTreeNodes,
  //Tech Talent
  techTalent,
  techTalentIndex,
  techTalentMedia,
  techTalentTree,
  techTalentTreeIndex,
  //Title
  title,
  titleIndex,
  //Toy
  toy,
  toyIndex,
  //WoW Token
  wowToken,
};
export { wow as default, wow };

//Account Profile
export * from './account-profile/account-profile';
export type * from './account-profile/types';
//Achievements
export * from './achievements/achievements';
export type * from './achievements/types';
//Auction House
export * from './auction-house/auction-house';
export type * from './auction-house/types';
//Azerite Essence
export * from './azerite-essence/azerite-essence';
export type * from './azerite-essence/types';
//Character Achievements
export * from './character-achievements/character-achievements';
export type * from './character-achievements/types';
//Character Appearance
export * from './character-appearance/character-appearance';
export type * from './character-appearance/types';
//Character Collections
export * from './character-collections/character-collections';
export type * from './character-collections/types';
//Character Encounters
export * from './character-encounters/character-encounters';
export type * from './character-encounters/types';
//Character Equipment
export * from './character-equipment/character-equipment';
export type * from './character-equipment/types';
//Character Hunter Pets
export * from './character-hunter-pets/character-hunter-pets';
export type * from './character-hunter-pets/types';
//Character Media
export * from './character-media/character-media';
export type * from './character-media/types';
//Character Mythic Keystone Profile
export * from './character-mythic-keystone-profile/character-mythic-keystone-profile';
export type * from './character-mythic-keystone-profile/types';
//Character Professions
export * from './character-professions/character-professions';
export type * from './character-professions/types';
//Character Profile
export * from './character-profile/character-profile';
export type * from './character-profile/types';
//Character PvP
export * from './character-pvp/character-pvp';
export type * from './character-pvp/types';
//Character Quests
export * from './character-quests/character-quests';
export type * from './character-quests/types';
//Character Reputations
export * from './character-reputations/character-reputations';
export type * from './character-reputations/types';
//Character Soulbinds
export * from './character-soulbinds/character-soulbinds';
export type * from './character-soulbinds/types';
//Character Specializations
export * from './character-specializations/character-specializations';
export type * from './character-specializations/types';
//Character Statistics
export * from './character-statistics/character-statistics';
export type * from './character-statistics/types';
//Character Titles
export * from './character-titles/character-titles';
export type * from './character-titles/types';
//Connected Realm
export * from './connected-realm/connected-realm';
export type * from './connected-realm/types';
//Covenant
export * from './covenant/covenant';
export type * from './covenant/types';
//Creature
export * from './creature/creature';
export type * from './creature/types';
//Guild
export * from './guild/guild';
export type * from './guild/types';
//Guild Crest
export * from './guild-crest/guild-crest';
export type * from './guild-crest/types';
//Heirloom
export * from './heirloom/heirloom';
export type * from './heirloom/types';
//Item
export * from './item/item';
export type * from './item/types';
//Journal
export * from './journal/journal';
export type * from './journal/types';
//Media Search
export * from './media-search/media-search';
export type * from './media-search/types';
//Modified Crafting
export * from './modified-crafting/modified-crafting';
export type * from './modified-crafting/types';
//Mount
export * from './mount/mount';
export type * from './mount/types';
//Mythic Keystone Affix
export * from './mythic-keystone-affix/mythic-keystone-affix';
export type * from './mythic-keystone-affix/types';
//Mythic Keystone Dungeon
export * from './mythic-keystone-dungeon/mythic-keystone-dungeon';
export type * from './mythic-keystone-dungeon/types';
//Mythic Keystone Leaderboard
export * from './mythic-keystone-leaderboard/mythic-keystone-leaderboard';
export type * from './mythic-keystone-leaderboard/types';
//Mythic Raid Leaderboard
export * from './mythic-raid-leaderboard/mythic-raid-leaderboard';
export type * from './mythic-raid-leaderboard/types';
//Pet
export * from './pet/pet';
export type * from './pet/types';
//Playable Class
export * from './playable-class/playable-class';
export type * from './playable-class/types';
//Playable Race
export * from './playable-race/playable-race';
export type * from './playable-race/types';
//Playable Specialization
export * from './playable-specialization/playable-specialization';
export type * from './playable-specialization/types';
//Power Type
export * from './power-type/power-type';
export type * from './power-type/types';
//Profession
export * from './profession/profession';
export type * from './profession/types';
//Pvp Season
export * from './pvp-season/pvp-season';
export type * from './pvp-season/types';
//Pvp Tier
export * from './pvp-tier/pvp-tier';
export type * from './pvp-tier/types';
//Quest
export * from './quest/quest';
export type * from './quest/types';
//Realm
export * from './realm/realm';
export type * from './realm/types';
//Region
export * from './region/region';
export type * from './region/types';
//Reputations
export * from './reputations/reputations';
export type * from './reputations/types';
//Spell
export * from './spell/spell';
export type * from './spell/types';
//Talent
export * from './talent/talent';
export type * from './talent/types';
//Tech Talent
export * from './tech-talent/tech-talent';
export type * from './tech-talent/types';
//Title
export * from './title/title';
export type * from './title/types';
//Toy
export * from './toy/toy';
export type * from './toy/types';
export type * from './wow-token/types';
//WoW Token
export * from './wow-token/wow-token';
