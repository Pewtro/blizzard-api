import type {
  BaseSearchParameters,
  Href,
  KeyBase,
  Locales,
  NameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';
import type { RealmCategory, RealmLocales, RealmTimezone, RealmTypeCapitalized } from '../realm/types';

/**
 * Connected Realm Index API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmIndexResponse extends ResponseBase {
  connected_realms: Array<Href>;
}
/**
 * Connected Realm API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmResponse extends ResponseBase {
  auctions: Href;
  has_queue: boolean;
  id: number;
  population: { name: string; type: RealmPopulationCapitalized };
  pvp_season?: Href;
  realm_locked_status?: RealmLockedStatus;
  realms: Array<Realm>;
  status: { name: RealmStatus; type: RealmStatusCapitalized };
}
/**
 * Connected Realm Search API parameters.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ConnectedRealmSearchParameters extends BaseSearchParameters {
  'realms.timezone'?: RealmTimezone;
  'status.type'?: RealmStatusCapitalized;
}

/**
 * Connected Realm Search API response item.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ConnectedRealmSearchResponse extends SearchResponseWithoutResults {
  results: Array<ConnectedRealmSearchResponseItem>;
}

interface ConnectedRealmSearchResponseItem extends KeyBase {
  data: {
    has_queue: boolean;
    id: number;
    population: SearchRealmPopulation;
    realms: Array<SearchRealm>;
    status: SearchRealmStatus;
  };
}

interface Realm {
  category: RealmCategory;
  connected_realm: Href;
  id: number;
  is_tournament: boolean;
  locale: RealmLocales;
  name: string;
  region: NameIdKey;
  slug: string;
  timezone: RealmTimezone;
  type: { name: string; type: RealmTypeCapitalized };
}

interface RealmLockedStatus {
  is_locked_for_new_characters: boolean;
  is_locked_for_pct: boolean;
}

type RealmPopulationCapitalized = 'FULL' | 'HIGH' | 'LOCKED' | 'LOW' | 'MEDIUM' | 'RECOMMENDED';

type RealmStatus = 'Down' | 'Up';

type RealmStatusCapitalized = 'DOWN' | 'UP';

interface SearchRealm {
  category: Record<Locales, string>;
  id: number;
  is_tournament: boolean;
  locale: RealmLocales;
  name: Record<Locales, string | undefined>;
  region: { id: number; name: Record<Locales, string> };
  slug: string;
  timezone: RealmTimezone;
  type: { name: Record<Locales, string>; type: RealmTypeCapitalized };
}

interface SearchRealmPopulation {
  name: Record<Locales, string>;
  type: RealmPopulationCapitalized;
}

interface SearchRealmStatus {
  name: Record<Locales, string>;
  type: RealmStatusCapitalized;
}
