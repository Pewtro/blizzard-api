import type { Locales } from '@blizzard-api/core';

export interface BlizzardCardSearchParameters extends BaseSearchParameters {
  attack?: string;
  collectible: '0' | '0,1' | '1';
  defaultMercenary?: string;
  health?: string;
  manaCost?: string;
  mercenaryId?: string;
  tier?: string;
}

export interface CardSearchParameters extends BaseSearchParameters {
  attack?: MultipleValueCardSearchParameter;
  collectible?: 'both' | 'collectible' | 'non-collectible';
  defaultMercenary?: MultipleValueCardSearchParameter;
  health?: MultipleValueCardSearchParameter;
  manaCost?: MultipleValueCardSearchParameter;
  mercenaryId?: MultipleValueCardSearchParameter;
  tier?: Array<Tier> | Tier;
}

export interface CardSearchResponse {
  cardCount: number;
  cards: Array<Card>;
  page: number;
  pageCount: number;
}

export interface FetchOneCardResponse {
  armor?: number;
  artistName: null | string;
  attack?: number;
  cardSetId: number;
  cardTypeId: number;
  childIds?: Array<number>;
  classId: null | number;
  collectible: number;
  copyOfCardId?: Array<number>;
  cropImage: null | string;
  flavorText: Record<Locales, string> | string;
  health?: number;
  id: number;
  image: Record<Locales, string> | string;
  imageGold: Record<Locales, string> | string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  keywordIds?: Array<number>;
  manaCost: number;
  mercenaryHero?: MercenaryHero;
  minionTypeId?: number;
  multiClassIds: Array<number>;
  multiTypeIds?: Array<number>;
  name: Record<Locales, string> | string;
  parentId?: number;
  rarityId?: null | number;
  slug: string;
  spellSchoolId?: number;
  text: Record<Locales, string> | string;
}

export type GameMode = 'arena' | 'battlegrounds' | 'classic' | 'constructed' | 'duels' | 'mercenaries' | 'standard';

interface BaseSearchParameters {
  class?: string;
  gameMode?: GameMode;
  keyword?: string;
  locale?: Locales;
  mercenaryRole?: string;
  minionType?: string;
  page?: number;
  pageSize?: number;
  rarity?: string;
  set?: string;
  sort?:
    'attack:asc' | 'attack:desc' | 'health:asc' | 'health:desc' | 'name:asc' | 'name:desc' | 'tier:asc' | 'tier:desc';
  spellSchool?: string;
  textFilter?: string;
  type?: string;
}

interface Battlegrounds {
  duosOnly: boolean;
  hero: boolean;
  image: string;
  imageGold: string;
  quest: boolean;
  reward: boolean;
  solosOnly: boolean;
  subsetTribes: Array<number>;
  tier: Tier;
  upgradeId: number;
}

interface Card {
  armor?: number;
  artistName: null | string;
  attack?: number;
  battlegrounds?: Battlegrounds;
  cardSetId: number;
  cardTypeId: number;
  childIds?: Array<number>;
  classId: null | number;
  collectible: number;
  copyOfCardId?: Array<number>;
  cropImage: null | string;
  flavorText: string;
  health?: number;
  id: number;
  image: string;
  imageGold: string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  keywordIds?: Array<number>;
  manaCost: number;
  mercenaryHero?: MercenaryHero;
  minionTypeId?: number;
  multiClassIds: Array<number>;
  multiTypeIds?: Array<number>;
  name: string;
  parentId?: number;
  rarityId: null | number;
  slug: string;
  spellSchoolId?: number;
  text: string;
}

interface MercenaryHero {
  collectible: number;
  craftingCost: number;
  default: number;
  faction: null | number;
  mercId: number;
  rarity: number;
  roleId: number;
  statsByLevel: Record<string, StatsByLevel>;
}

type MultipleValueCardSearchParameter = Array<number | string> | number | string;

interface StatsByLevel {
  attack: number;
  health: number;
}

type Tier = 1 | 2 | 3 | 4 | 5 | 6 | 'hero';
