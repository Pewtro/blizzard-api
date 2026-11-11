import {
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
} from './account-profile/index';
import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from './achievements/index';
import { auctionHouseIndex, auctions, commodities } from './auction-house/index';
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
import { characterMythicKeystoneProfileIndex } from './character-mythic-keystone-profile/index';
import { characterProfessionsSummary } from './character-professions/index';
import { characterProfileStatus, characterProfileSummary } from './character-profile/index';
import { characterPvpSummary } from './character-pvp/index';
import { characterCompletedQuests, characterQuests } from './character-quests/index';
import { characterReputationsSummary } from './character-reputations/index';
import { characterSpecializationsSummary } from './character-specializations/index';
import { characterStatisticsSummary } from './character-statistics/index';
import { characterTitlesSummary } from './character-titles/index';
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
  itemAppearance,
  itemAppearanceSearch,
  itemAppearanceSet,
  itemAppearanceSetIndex,
  itemAppearanceSlot,
  itemAppearanceSlotIndex,
} from './item-appearance/index';
import {
  item,
  itemClass,
  itemClassIndex,
  itemMedia,
  itemSearch,
  itemSet,
  itemSetIndex,
  itemSubclass,
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
import { mount, mountIndex, mountSearch } from './mount/index';
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
import { region, regionIndex } from './region/index';
import { reputationFaction, reputationFactionIndex, reputationTiers, reputationTiersIndex } from './reputations/index';
import { ruleset, rulesetIndex } from './ruleset/index';
import { spell, spellMedia, spellSearch } from './spell/index';
import {
  pvpTalent,
  pvpTalentIndex,
  talent,
  talentIndex,
  talentTree,
  talentTreeIndex,
  talentTreeNodes,
} from './talent/index';
import { title, titleIndex } from './title/index';
import { toy, toyIndex } from './toy/index';

const wowForever = {
  //Account Profile
  accountCollectionsIndex,
  accountHeirloomsCollectionSummary,
  accountMountsCollectionSummary,
  accountPetsCollectionSummary,
  accountProfileSummary,
  accountToysCollectionSummary,
  accountTransmogsCollectionSummary,
  //Achievements
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
  //Auction House
  auctionHouseIndex,
  auctions,
  commodities,
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
  //Character Profile
  characterProfileStatus,
  characterProfileSummary,
  //Character Professions
  characterProfessionsSummary,
  //Character PvP
  characterPvpSummary,
  //Character Quests
  characterCompletedQuests,
  characterQuests,
  //Character Reputations
  characterReputationsSummary,
  //Character Specializations
  characterSpecializationsSummary,
  //Character Statistics
  characterStatisticsSummary,
  //Character Titles
  characterTitlesSummary,
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
  itemSubclass,
  //Item Appearance
  itemAppearance,
  itemAppearanceSearch,
  itemAppearanceSet,
  itemAppearanceSetIndex,
  itemAppearanceSlot,
  itemAppearanceSlotIndex,
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
  //Mount
  mount,
  mountIndex,
  mountSearch,
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
  //Profession
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
  //Quest
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
  //Region
  region,
  regionIndex,
  //Reputations
  reputationFaction,
  reputationFactionIndex,
  reputationTiers,
  reputationTiersIndex,
  //Ruleset
  ruleset,
  rulesetIndex,
  //Spell
  spell,
  spellMedia,
  spellSearch,
  //Talent
  pvpTalent,
  pvpTalentIndex,
  talent,
  talentIndex,
  talentTree,
  talentTreeIndex,
  talentTreeNodes,
  //Title
  title,
  titleIndex,
  //Toy
  toy,
  toyIndex,
};
export default wowForever;
export { wowForever };

//Account Profile
export * from './account-profile/index';
export type * from './account-profile/types';
//Achievements
export * from './achievements/index';
export type * from './achievements/types';
//Auction House
export * from './auction-house/index';
export type * from './auction-house/types';
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
//Character Profile
export * from './character-profile/index';
export type * from './character-profile/types';
//Character Professions
export * from './character-professions/index';
export type * from './character-professions/types';
//Character PvP
export * from './character-pvp/index';
export type * from './character-pvp/types';
//Character Quests
export * from './character-quests/index';
export type * from './character-quests/types';
//Character Reputations
export * from './character-reputations/index';
export type * from './character-reputations/types';
//Character Specializations
export * from './character-specializations/index';
export type * from './character-specializations/types';
//Character Statistics
export * from './character-statistics/index';
export type * from './character-statistics/types';
//Character Titles
export * from './character-titles/index';
export type * from './character-titles/types';
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
//Item
export * from './item/index';
export type * from './item/types';
//Item Appearance
export * from './item-appearance/index';
export type * from './item-appearance/types';
//Journal
export * from './journal/index';
export type * from './journal/types';
//Media Search
export * from './media-search/index';
export type * from './media-search/types';
//Mount
export * from './mount/index';
export type * from './mount/types';
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
//Quest
export * from './quest/index';
export type * from './quest/types';
//Region
export * from './region/index';
export type * from './region/types';
//Reputations
export * from './reputations/index';
export type * from './reputations/types';
//Ruleset
export * from './ruleset/index';
export type * from './ruleset/types';
//Spell
export * from './spell/index';
export type * from './spell/types';
//Talent
export * from './talent/index';
export type * from './talent/types';
//Title
export * from './title/index';
export type * from './title/types';
//Toy
export * from './toy/index';
export type * from './toy/types';
