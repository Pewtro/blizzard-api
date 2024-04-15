import type { Faction, NameIdKey, ResponseBase } from '../base';

export interface QuestIndexResponse extends ResponseBase {
  categories: { href: string };
  areas: { href: string };
  types: { href: string };
}

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

export interface QuestAreaIndexResponse extends ResponseBase {
  areas: Array<NameIdKey>;
}

export interface QuestAreaResponse extends ResponseBase {
  id: number;
  area: string;
  quests: Array<NameIdKey>;
}

export interface QuestCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
}

export interface QuestCategoryResponse extends ResponseBase {
  id: number;
  category: string;
  quests: Array<NameIdKey>;
}

export interface QuestTypeIndexResponse extends ResponseBase {
  types: Array<NameIdKey>;
}

export interface QuestTypeResponse extends ResponseBase {
  id: number;
  type: string;
  quests: Array<NameIdKey>;
}
