import type { Locales } from '@blizzard-api/core';
import type { GameMode } from '../base';

export interface BlizzardCardSearchParameters extends BaseSearchParameters {
  attack?: string;
  defaultMercenary?: string;
  health?: string;
  mercenaryId?: string;
}

export interface CardSearchParameters extends BaseSearchParameters {
  attack?: Array<number> | number;
  defaultMercenary?: Array<number> | number;
  health?: Array<number> | number;
  mercenaryId?: Array<number> | number;
}

export interface CardSearchResponse {
  cardCount: number;
  cards: Array<Card>;
  page: number;
  pageCount: number;
}

export interface FetchOneCardResponse {
  artistName: string;
  attack: number;
  cardSetId: number;
  cardTypeId: number;
  classId: number;
  collectible: number;
  cropImage: string;
  flavorText: Record<Locales, string> | string;
  health: number;
  id: number;
  image: Record<Locales, string> | string;
  imageGold: Record<Locales, string> | string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  keywordIds: Array<number>;
  manaCost: number;
  multiClassIds: Array<number>;
  name: Record<Locales, string> | string;
  rarityId: number;
  slug: string;
  text: Record<Locales, string> | string;
}

interface BaseSearchParameters {
  gameMode?: GameMode;
  locale?: Locales;
  mercenaryRole?: string;
  minionType?: string;
  page?: number;
  pageSize?: number;
  sort?:
    | 'attack:asc'
    | 'attack:desc'
    | 'health:asc'
    | 'health:desc'
    | 'name:asc'
    | 'name:desc'
    | 'tier:asc'
    | 'tier:desc';
  textFilter?: string;
  tier?: 1 | 2 | 3 | 4 | 5 | 6 | 'hero';
}

interface Card {
  artistName: null | string;
  attack: number;
  cardSetId: number;
  cardTypeId: number;
  classId: null | number;
  collectible: number;
  cropImage: null | string;
  flavorText: string;
  health: number;
  id: number;
  image: string;
  imageGold: string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  manaCost: number;
  mercenaryHero: MercenaryHero;
  minionTypeId: number;
  multiClassIds: Array<number>;
  multiTypeIds?: Array<number>;
  name: string;
  rarityId: number;
  slug: string;
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

interface StatsByLevel {
  attack: number;
  health: number;
}
