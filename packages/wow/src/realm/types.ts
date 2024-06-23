import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

// RealmLocale is the same as Locales but without the _ in the middle, assuming that `multi` cannot be used in this context
export type WithoutUnderscore<T extends string> = T extends `${infer Prefix}_${infer Suffix}`
  ? `${Prefix}${Suffix}`
  : never;

/**
 * The category of a realm.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export type RealmCategory =
  | 'Brazil'
  | 'English'
  | 'French'
  | 'German'
  | 'Italian'
  | 'Latin America'
  | 'Oceanic'
  | 'PS'
  | 'Russian'
  | 'Spanish'
  | 'United States'
  | '한국';

/**
 * The timezone of a realm.
 */
export type RealmTimezone =
  | 'America/Chicago'
  | 'America/Denver'
  | 'America/Los_Angeles'
  | 'America/New_York'
  | 'America/Sao_Paulo'
  | 'Asia/Seoul'
  | 'Australia/Melbourne'
  | 'Europe/Paris';

/**
 * The type of a realm, capitalized and shortended).
 */
export type RealmTypeCapitalized = 'NORMAL' | 'RP';

/**
 * The type of a realm, not capitalized or shortened.
 */
export type RealmType = 'Normal' | 'Roleplaying';

/**
 * The response for a realm index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RealmIndexResponse extends ResponseBase {
  realms: Array<Realm>;
}

interface Realm extends NameIdKey {
  slug: string;
}

/**
 * The response for a realm.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RealmResponse extends ResponseBase, NameId {
  category: RealmCategory;
  connected_realm: { href: string };
  is_tournament: boolean;
  locale: WithoutUnderscore<Locales>;
  region: NameIdKey;
  slug: string;
  timezone: RealmTimezone;
  type: { name: RealmType; type: RealmTypeCapitalized };
}

/**
 * The search parameters for realms.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface RealmSearchParameters extends BaseSearchParameters {
  timezone?: RealmTimezone;
}

/**
 * The response for a realm search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface RealmSearchResponseItem extends KeyBase {
  data: {
    category: Record<Locales, string | undefined>;
    id: number;
    is_tournament: boolean;
    locale: WithoutUnderscore<Locales>;
    name: Record<Locales, string | undefined>;
    region: { id: number; name: Record<Locales, string | undefined> };
    slug: string;
    timezone: RealmTimezone;
    type: { name: Record<Locales, string | undefined>; type: RealmTypeCapitalized };
  };
}
