import {
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
  protectedCharacterProfileSummary,
} from './account-profile/index';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './achievements/index';
import { auctions, commodities } from './auction-house/index';
import {
  azeriteEssence,
  azeriteEssenceIndex,
  azeriteEssenceMedia,
  azeriteEssenceSearch,
} from './azerite-essence/index';
import { characterAchievementsSummary, characterAchievementStatistics } from './character-achievements/index';
import { characterAppearanceSummary } from './character-appearance/index';
import {
  characterCollectionsIndex,
  characterHeirloomsCollectionSummary,
  characterMountsCollectionSummary,
  characterPetsCollectionSummary,
  characterToysCollectionSummary,
  characterTransmogCollectionSummary,
} from './character-collections/index';
import { characterDungeons, characterEncountersSummary, characterRaids } from './character-encounters/index';
import { characterEquipmentSummary } from './character-equipment/index';
import { characterHunterPetsSummary } from './character-hunter-pets/index';
import { characterMediaSummary } from './character-media/index';
import {
  characterMythicKeystoneProfileIndex,
  characterMythicKeystoneSeasonDetails,
} from './character-mythic-keystone-profile/index';
import { characterProfessionsSummary } from './character-professions/index';
import { characterProfileStatus, characterProfileSummary } from './character-profile/index';
import { characterPvpBracketStatistics, characterPvpSummary } from './character-pvp/index';
import { characterCompletedQuests, characterQuests } from './character-quests/index';
import { characterReputationsSummary } from './character-reputations/index';
import { characterSoulbinds } from './character-soulbinds/index';
import { characterSpecializationsSummary } from './character-specializations/index';
import { characterStatisticsSummary } from './character-statistics/index';
import { characterTitlesSummary } from './character-titles/index';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from './connected-realm/index';
import {
  conduit,
  conduitIndex,
  covenant,
  covenantIndex,
  covenantMedia,
  soulbind,
  soulbindIndex,
} from './covenant/index';
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
import { heirloom, heirloomIndex } from './heirloom/index';
import {
  decor,
  decorIndex,
  decorSearch,
  fixture,
  fixtureHook,
  fixtureHookIndex,
  fixtureHookSearch,
  fixtureIndex,
  fixtureSearch,
  room,
  roomIndex,
  roomSearch,
} from './housing-decor/index';
import {
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubClass,
} from './item/index';
import {
  journalEncounter,
  journalEncounterIndex,
  journalEncounterSearch,
  journalExpansion,
  journalExpansionIndex,
  journalInstance,
  journalInstanceIndex,
  journalInstanceMedia,
} from './journal/index';
import { mediaSearch } from './media-search/index';
import {
  modifiedCraftingCategory,
  modifiedCraftingCategoryIndex,
  modifiedCraftingIndex,
  modifiedCraftingReagentSlotType,
  modifiedCraftingReagentSlotTypeIndex,
} from './modified-crafting/index';
import { mount, mountIndex, mountSearch } from './mount/index';
import { mythicKeystoneAffix, mythicKeystoneAffixIndex, mythicKeystoneAffixMedia } from './mythic-keystone-affix/index';
import {
  mythicKeystoneDungeon,
  mythicKeystoneDungeonIndex,
  mythicKeystoneIndex,
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from './mythic-keystone-dungeon/index';
import { mythicKeystoneLeaderboard, mythicKeystoneLeaderboardIndex } from './mythic-keystone-leaderboard/index';
import { mythicRaidLeaderboard } from './mythic-raid-leaderboard/index';
import { pet, petAbility, petAbilityIndex, petAbilityMedia, petIndex, petMedia } from './pet/index';
import { playableClass, playableClassIndex, playableClassMedia, pvpTalentSlots } from './playable-class/index';
import { playableRace, playableRaceIndex } from './playable-race/index';
import {
  playableSpecialization,
  playableSpecializationIndex,
  playableSpecializationMedia,
} from './playable-specialization/index';
import { powerType, powerTypeIndex } from './power-type/index';
import {
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
} from './profession/index';
import { pvpLeaderboard, pvpLeaderboardIndex, pvpRewardsIndex, pvpSeason, pvpSeasonIndex } from './pvp-season/index';
import { pvpTier, pvpTierIndex, pvpTierMedia } from './pvp-tier/index';
import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from './quest/index';
import { realm, realmIndex, realmSearch } from './realm/index';
import { region, regionIndex } from './region/index';
import { reputationFaction, reputationFactionIndex, reputationTiers, reputationTiersIndex } from './reputations/index';
import { spell, spellMedia, spellSearch } from './spell/index';
import { pvpTalent, pvpTalentIndex, talentIndex, talentTree, talentTreeIndex, talentTreeNodes } from './talent/index';
import { techTalent, techTalentIndex, techTalentMedia, techTalentTree, techTalentTreeIndex } from './tech-talent/index';
import { title, titleIndex } from './title/index';
import { toy, toyIndex } from './toy/index';
import { wowToken } from './wow-token/index';

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
  characterPvpBracketStatistics,
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
  //Housing Decor
  decor,
  decorIndex,
  decorSearch,
  fixture,
  fixtureHook,
  fixtureHookIndex,
  fixtureHookSearch,
  fixtureIndex,
  fixtureSearch,
  room,
  roomIndex,
  roomSearch,
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
export default wow;
export { wow };

//Account Profile
export * from './account-profile/index';
export type * from './account-profile/types';
//Achievements
export * from './achievements/index';
export type * from './achievements/types';
//Auction House
export * from './auction-house/index';
export type * from './auction-house/types';
//Azerite Essence
export * from './azerite-essence/index';
export type * from './azerite-essence/types';
//Character Achievements
export * from './character-achievements/index';
export type * from './character-achievements/types';
//Character Appearance
export * from './character-appearance/index';
export type * from './character-appearance/types';
//Character Collections
export * from './character-collections/index';
export type * from './character-collections/types';
//Character Encounters
export * from './character-encounters/index';
export type * from './character-encounters/types';
//Character Equipment
export * from './character-equipment/index';
export type * from './character-equipment/types';
//Character Hunter Pets
export * from './character-hunter-pets/index';
export type * from './character-hunter-pets/types';
//Character Media
export * from './character-media/index';
export type * from './character-media/types';
//Character Mythic Keystone Profile
export * from './character-mythic-keystone-profile/index';
export type * from './character-mythic-keystone-profile/types';
//Character Professions
export * from './character-professions/index';
export type * from './character-professions/types';
//Character Profile
export * from './character-profile/index';
export type * from './character-profile/types';
//Character PvP
export * from './character-pvp/index';
export type * from './character-pvp/types';
//Character Quests
export * from './character-quests/index';
export type * from './character-quests/types';
//Character Reputations
export * from './character-reputations/index';
export type * from './character-reputations/types';
//Character Soulbinds
export * from './character-soulbinds/index';
export type * from './character-soulbinds/types';
//Character Specializations
export * from './character-specializations/index';
export type * from './character-specializations/types';
//Character Statistics
export * from './character-statistics/index';
export type * from './character-statistics/types';
//Character Titles
export * from './character-titles/index';
export type * from './character-titles/types';
//Connected Realm
export * from './connected-realm/index';
export type * from './connected-realm/types';
//Covenant
export * from './covenant/index';
export type * from './covenant/types';
//Creature
export * from './creature/index';
export type * from './creature/types';
//Guild
export * from './guild/index';
export type * from './guild/types';
//Guild Crest
export * from './guild-crest/index';
export type * from './guild-crest/types';
//Heirloom
export * from './heirloom/index';
export type * from './heirloom/types';
//Housing Decor
export * from './housing-decor/index';
export type * from './housing-decor/types';
//Item
export * from './item/index';
export type * from './item/types';
//Journal
export * from './journal/index';
export type * from './journal/types';
//Media Search
export * from './media-search/index';
export type * from './media-search/types';
//Modified Crafting
export * from './modified-crafting/index';
export type * from './modified-crafting/types';
//Mount
export * from './mount/index';
export type * from './mount/types';
//Mythic Keystone Affix
export * from './mythic-keystone-affix/index';
export type * from './mythic-keystone-affix/types';
//Mythic Keystone Dungeon
export * from './mythic-keystone-dungeon/index';
export type * from './mythic-keystone-dungeon/types';
//Mythic Keystone Leaderboard
export * from './mythic-keystone-leaderboard/index';
export type * from './mythic-keystone-leaderboard/types';
//Mythic Raid Leaderboard
export * from './mythic-raid-leaderboard/index';
export type * from './mythic-raid-leaderboard/types';
//Pet
export * from './pet/index';
export type * from './pet/types';
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
//Profession
export * from './profession/index';
export type * from './profession/types';
//Pvp Season
export * from './pvp-season/index';
export type * from './pvp-season/types';
//Pvp Tier
export * from './pvp-tier/index';
export type * from './pvp-tier/types';
//Quest
export * from './quest/index';
export type * from './quest/types';
//Realm
export * from './realm/index';
export type * from './realm/types';
//Region
export * from './region/index';
export type * from './region/types';
//Reputations
export * from './reputations/index';
export type * from './reputations/types';
//Spell
export * from './spell/index';
export type * from './spell/types';
//Talent
export * from './talent/index';
export type * from './talent/types';
//Tech Talent
export * from './tech-talent/index';
export type * from './tech-talent/types';
//Title
export * from './title/index';
export type * from './title/types';
//Toy
export * from './toy/index';
export type * from './toy/types';
//WoW Token
export * from './wow-token/index';
export type * from './wow-token/types';
