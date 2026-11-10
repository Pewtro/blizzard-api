import type { Faction, Href, NameIdKey, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a quest area index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestAreaIndexResponse extends ResponseBase {
  areas: Array<NameIdKey>;
}

/**
 * The response for a quest area.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestAreaResponse extends ResponseBase {
  area: string;
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
  area?: NameIdKey;
  category?: NameIdKey;
  description?: string;
  id: number;
  is_daily?: boolean;
  is_repeatable?: boolean;
  is_weekly?: boolean;
  requirements: QuestRequirements;
  rewards: QuestRewards;
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
 * A condition within a quest requirement tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestCondition {
  conditions?: Array<QuestCondition>;
  must_be_incomplete?: boolean;
  operator?: QuestOperator;
  target?: NameIdKey;
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

interface QuestCurrencyReward {
  reward: NameIdKey;
  value: number;
}

interface QuestItemReward {
  item: NameIdKey;
}

interface QuestMoney {
  units: QuestMoneyUnits;
  value: number;
}

interface QuestMoneyUnits {
  copper: number;
  gold: number;
  silver: number;
}

interface QuestOperator {
  name: string;
  type: 'AND' | 'OR';
}

interface QuestReputationRequirement {
  faction: NameIdKey;
  max_reputation?: number;
  min_reputation?: number;
}

interface QuestReputationReward {
  reward: NameIdKey;
  value: number;
}

interface QuestRequirement {
  conditions: Array<QuestCondition>;
  operator: QuestOperator;
}

interface QuestRequirements {
  classes?: Array<NameIdKey>;
  faction?: Faction;
  max_character_level?: number;
  min_character_level?: number;
  quests?: QuestRequirement;
  races?: Array<NameIdKey>;
  reputations?: Array<QuestReputationRequirement>;
}

interface QuestRewardItems {
  choice_of?: Array<QuestItemReward>;
  items?: Array<QuestItemReward>;
}

interface QuestRewards {
  currency?: Array<QuestCurrencyReward>;
  experience?: number;
  items?: QuestRewardItems;
  money?: QuestMoney;
  reputations?: Array<QuestReputationReward>;
  spell?: NameIdKey;
  trade_skill_spell?: NameIdKey;
}
