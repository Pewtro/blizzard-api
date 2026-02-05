import type { Faction, Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

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
  quests: Array<NameIdKey>;
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
  quests: Array<NameIdKey>;
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
  category: NameIdKey;
  description: string;
  id: number;
  requirements: Requirements;
  rewards: Rewards;
  title: string;
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
  quests: Array<NameIdKey>;
  type: string;
}

interface Money {
  units: Units;
  value: number;
}

interface Reputation {
  reward: NameIdKey;
  value: number;
}

interface ReputationRequirement {
  faction: NameIdKey;
  min_reputation: number;
}

interface Requirements {
  faction: Faction;
  max_character_level: number;
  min_character_level: number;
  reputations: Array<ReputationRequirement>;
}

interface Rewards {
  experience: number;
  money: Money;
  reputations: Array<Reputation>;
}

interface Units {
  copper: number;
  gold: number;
  silver: number;
}
