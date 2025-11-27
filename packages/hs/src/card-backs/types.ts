import type { Locales } from '@blizzard-api/core';

export interface CardBackSearchParameters {
  cardBackCategory?:
    | 'achieve'
    | 'base'
    | 'blizzard'
    | 'esports'
    | 'events'
    | 'fireside'
    | 'game_license'
    | 'golden'
    | 'heroes'
    | 'legend'
    | 'pre_purchase'
    | 'promotion'
    | 'season';
  locale?: Locales;
  page?: number;
  pageSize?: number;
  sort?: SearchSortOption;
  textFilter?: string;
}

export interface CardBackSearchResponse {
  cardBacks: Array<SingleCardBackSearchResponse>;
  cardCount: number;
  page: number;
  pageCount: number;
}

export interface SingleCardBackSearchResponse {
  id: number;
  image: string;
  name: Record<Locales, string> | string;
  slug: string;
  sortCategory: number;
  text: Record<Locales, string> | string;
}

type SearchOptions = 'attack' | 'class' | 'dataAdded' | 'groupByClass' | 'health' | 'manaCost' | 'name';
type SearchSortOption = `${SearchOptions}:${SortOptions}`;
type SortOptions = 'asc' | 'desc';
