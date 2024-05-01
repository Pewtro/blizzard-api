import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

// RealmLocale is the same as Locales but without the _ in the middle, assuming that `multi` cannot be used in this context
export type WithoutUnderscore<T extends string> = T extends `${infer Prefix}_${infer Suffix}`
  ? `${Prefix}${Suffix}`
  : never;

export type RealmCategory =
  | 'English'
  | 'French'
  | 'German'
  | 'Italian'
  | 'PS'
  | 'Russian'
  | 'Spanish'
  | 'Brazil'
  | 'Latin America'
  | 'Oceanic'
  | 'United States';

//There are probably more timezone that should be added here
export type RealmTimezone =
  | 'America/Chicago'
  | 'America/Denver'
  | 'America/Los_Angeles'
  | 'America/New_York'
  | 'America/Sao_Paulo'
  | 'Australia/Melbourne'
  | 'Europe/Paris';

export type RealmTypeCapitalized = 'NORMAL' | 'RP';
export type RealmType = 'Normal' | 'Roleplaying';

export interface RealmIndexResponse extends ResponseBase {
  realms: Array<Realm>;
}

interface Realm extends NameIdKey {
  slug: string;
}

export interface RealmResponse extends ResponseBase, NameId {
  region: NameIdKey;
  connected_realm: { href: string };
  category: RealmCategory;
  locale: WithoutUnderscore<Locales>;
  timezone: RealmTimezone;
  type: { type: RealmTypeCapitalized; name: RealmType };
  is_tournament: boolean;
  slug: string;
}

export interface RealmSearchParameters extends BaseSearchParameters {
  timezone?: RealmTimezone;
}

export interface RealmSearchResponseItem extends KeyBase {
  data: {
    is_tournament: boolean;
    timezone: RealmTimezone;
    name: Record<Locales, string | undefined>;
    id: number;
    region: { name: Record<Locales, string | undefined>; id: number };
    category: Record<Locales, string | undefined>;
    locale: WithoutUnderscore<Locales>;
    type: { type: RealmTypeCapitalized; name: Record<Locales, string | undefined> };
    slug: string;
  };
}
