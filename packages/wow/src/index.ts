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

export const wow = {
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
export default wow;

//Account Profile
export * from './account-profile/account-profile';
export * from './account-profile/types';
//Achievements
export * from './achievements/achievements';
export * from './achievements/types';
//Auction House
export * from './auction-house/auction-house';
export * from './auction-house/types';
//Azerite Essence
export * from './azerite-essence/azerite-essence';
export * from './azerite-essence/types';
//Character Achievements
export * from './character-achievements/character-achievements';
export * from './character-achievements/types';
//Character Appearance
export * from './character-appearance/character-appearance';
export * from './character-appearance/types';
//Character Collections
export * from './character-collections/character-collections';
export * from './character-collections/types';
//Character Encounters
export * from './character-encounters/character-encounters';
export * from './character-encounters/types';
//Character Equipment
export * from './character-equipment/character-equipment';
export * from './character-equipment/types';
//Connected Realm
export * from './connected-realm/connected-realm';
export * from './connected-realm/types';
//Covenant
export * from './covenant/covenant';
export * from './covenant/types';
//Creature
export * from './creature/creature';
export * from './creature/types';
//Guild Crest
export * from './guild-crest/guild-crest';
export * from './guild-crest/types';
//Heirloom
export * from './heirloom/heirloom';
export * from './heirloom/types';
//Item
export * from './item/item';
export * from './item/types';
//Journal
export * from './journal/journal';
export * from './journal/types';
//Media Search
export * from './media-search/media-search';
export * from './media-search/types';
//Modified Crafting
export * from './modified-crafting/modified-crafting';
export * from './modified-crafting/types';
//Mount
export * from './mount/mount';
export * from './mount/types';
//Mythic Keystone Affix
export * from './mythic-keystone-affix/mythic-keystone-affix';
export * from './mythic-keystone-affix/types';
//Mythic Keystone Dungeon
export * from './mythic-keystone-dungeon/mythic-keystone-dungeon';
export * from './mythic-keystone-dungeon/types';
//Mythic Keystone Leaderboard
export * from './mythic-keystone-leaderboard/mythic-keystone-leaderboard';
export * from './mythic-keystone-leaderboard/types';
//Mythic Raid Leaderboard
export * from './mythic-raid-leaderboard/mythic-raid-leaderboard';
export * from './mythic-raid-leaderboard/types';
//Pet
export * from './pet/pet';
export * from './pet/types';
//Playable Class
export * from './playable-class/playable-class';
export * from './playable-class/types';
//Playable Race
export * from './playable-race/playable-race';
export * from './playable-race/types';
//Playable Specialization
export * from './playable-specialization/playable-specialization';
export * from './playable-specialization/types';
//Power Type
export * from './power-type/power-type';
export * from './power-type/types';
//Profession
export * from './profession/profession';
export * from './profession/types';
//Pvp Season
export * from './pvp-season/pvp-season';
export * from './pvp-season/types';
//Pvp Tier
export * from './pvp-tier/pvp-tier';
export * from './pvp-tier/types';
//Quest
export * from './quest/quest';
export * from './quest/types';
//Realm
export * from './realm/realm';
export * from './realm/types';
//Region
export * from './region/region';
export * from './region/types';
//Reputations
export * from './reputations/reputations';
export * from './reputations/types';
//Spell
export * from './spell/spell';
export * from './spell/types';
//Talent
export * from './talent/talent';
export * from './talent/types';
//Tech Talent
export * from './tech-talent/tech-talent';
export * from './tech-talent/types';
//Title
export * from './title/title';
export * from './title/types';
//Toy
export * from './toy/toy';
export * from './toy/types';
export * from './wow-token/types';
//WoW Token
export * from './wow-token/wow-token';
