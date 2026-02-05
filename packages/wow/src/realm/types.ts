import type {
  BaseSearchParameters,
  Href,
  KeyBase,
  Locales,
  NameId,
  NameIdKey,
  Realm,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

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
 * The response for a realm index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RealmIndexResponse extends ResponseBase {
  realms: Array<Realm>;
}

export type RealmLocales =
  | 'deDE'
  | 'enGB'
  | 'enUS'
  | 'esES'
  | 'esMX'
  | 'frFR'
  | 'itIT'
  | 'koKR'
  | 'ptBR'
  | 'ptPT'
  | 'ruRU'
  | 'zhCN'
  | 'zhTW';

/**
 * The response for a realm.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RealmResponse extends NameId, ResponseBase {
  category: RealmCategory;
  connected_realm: Href;
  is_tournament: boolean;
  locale: RealmLocales;
  region: NameIdKey;
  slug: string;
  timezone: RealmTimezone;
  type: { name: string; type: RealmTypeCapitalized };
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
export interface RealmSearchResponse extends SearchResponseWithoutResults {
  results: Array<RealmSearchResponseItem>;
}

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
 * The type of a realm, capitalized and shortened).
 */
export type RealmTypeCapitalized = 'NORMAL' | 'RP';

interface RealmSearchResponseItem extends KeyBase {
  data: {
    category: Record<Locales, string>;
    id: number;
    is_tournament: boolean;
    locale: RealmLocales;
    name: Record<Locales, string>;
    region: { id: number; name: Record<Locales, string> };
    slug: string;
    timezone: RealmTimezone;
    type: { name: Record<Locales, string>; type: RealmTypeCapitalized };
  };
}
