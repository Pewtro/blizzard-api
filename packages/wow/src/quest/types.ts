import type { Faction, Href, NameId, NameIdKey, NameType, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

export interface QuestCondition {
  conditions?: Array<QuestCondition>;
  must_be_incomplete?: boolean;
  operator?: QuestOperator;
  target?: NullishNameIdKey;
}

/**
 * The response for a quest area index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestAreaIndexResponse extends ResponseBase {
  areas: Array<NullishNameIdKey>;
}

/**
 * The response for a quest area.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestAreaResponse extends ResponseBase {
  area: null | string;
  id: number;
  quests: Array<NullishNameIdKey>;
}

/**
 * The response for a quest category index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
}

/**
 * The response for a quest category.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestCategoryResponse extends ResponseBase {
  category: string;
  id: number;
  quests: Array<NullishNameIdKey>;
}

/**
 * The response for a quest index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestIndexResponse extends ResponseBase {
  areas: Href;
  categories: Href;
  types: Href;
}

/**
 * The response for a quest.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestResponse extends ResponseBase {
  area?: NullishNameIdKey;
  category?: NameIdKey;
  description?: string;
  id: number;
  is_daily?: boolean;
  is_repeatable?: boolean;
  is_weekly?: boolean;
  requirements: Requirements;
  rewards: Rewards;
  title: null | string;
  type?: NameIdKey;
}

/**
 * The response for a quest type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestTypeIndexResponse extends ResponseBase {
  types: Array<NameIdKey>;
}

/**
 * The response for a quest type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestTypeResponse extends ResponseBase {
  id: number;
  quests: Array<NullishNameIdKey>;
  type: string;
}

interface CurrencyReward {
  reward: NameIdKey;
  value: number;
}

interface Money {
  units: Units;
  value: number;
}

interface QuestOperator extends NameType {
  type: 'AND' | 'OR';
}

interface QuestRequirement {
  conditions: Array<QuestCondition>;
  operator: QuestOperator;
}

interface QuestRewardIndividualItem {
  item: NameIdKey;
  requirements?: {
    playable_specializations?: Array<NameIdKey>;
  };
}

interface QuestRewardItems {
  choice_of?: Array<QuestRewardIndividualItem>;
  items?: Array<QuestRewardIndividualItem>;
}

interface Reputation {
  reward: NameIdKey;
  value: number;
}

interface ReputationRequirement {
  faction: NameIdKey;
  max_reputation?: number;
  min_reputation?: number;
}

interface Requirements {
  classes?: Array<NameIdKey>;
  faction?: Faction;
  max_character_level: number;
  min_character_level: number;
  quests?: QuestRequirement;
  races?: Array<NameIdKey>;
  reputations?: Array<ReputationRequirement>;
}

interface Rewards {
  currency?: Array<CurrencyReward>;
  experience?: number;
  follower?: {
    alliance: NameId;
    horde: NameId;
  };
  honor?: number;
  items?: QuestRewardItems;
  money?: Money;
  reputations?: Array<Reputation>;
  spell?: NameIdKey;
}

interface Units {
  copper: number;
  gold: number;
  silver: number;
}
