import type { Faction, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a quest index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestIndexResponse extends ResponseBase {
  categories: { href: string };
  areas: { href: string };
  types: { href: string };
}

/**
 * The response for a quest.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface QuestResponse extends ResponseBase {
  id: number;
  title: string;
  area: NameIdKey;
  description: string;
  requirements: Requirements;
  rewards: Rewards;
}

interface Requirements {
  min_character_level: number;
  max_character_level: number;
  faction: Faction;
}

interface Rewards {
  experience: number;
  reputations: Array<Reputation>;
  money: Money;
}

interface Money {
  value: number;
  units: Units;
}

interface Units {
  gold: number;
  silver: number;
  copper: number;
}

interface Reputation {
  reward: NameIdKey;
  value: number;
}

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
  id: number;
  area: string;
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
  id: number;
  category: string;
  quests: Array<NameIdKey>;
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
  type: string;
  quests: Array<NameIdKey>;
}
