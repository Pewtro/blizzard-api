import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, NameIdKey, ResponseBase } from '../base';
import type { RealmCategory, RealmLocales, RealmTimezone, RealmType, RealmTypeCapitalized } from '../realm/types';

/**
 * Connected Realm Index API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmIndexResponse extends ResponseBase {
  connected_realms: Array<{ href: string }>;
}
/**
 * Connected Realm API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmResponse extends ResponseBase {
  auctions: { href: string };
  has_queue: boolean;
  id: number;
  mythic_leaderboards: { href: string };
  population: { name: RealmPopulation; type: RealmPopulationCapitalized };
  realm_locked_status?: RealmLockedStatus;
  realms: Array<Realm>;
  status: { name: RealmStatus; type: Uppercase<RealmStatus> };
}
/**
 * Connected Realm Search API parameters.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ConnectedRealmSearchParameters extends BaseSearchParameters {
  'realms.timezone'?: RealmTimezone;
  'status.type'?: Uppercase<RealmStatus>;
}

/**
 * Connected Realm Search API response item.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ConnectedRealmSearchResponseItem extends KeyBase {
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
  connected_realm: { href: string };
  id: number;
  is_tournament: boolean;
  locale: RealmLocales;
  name: string;
  region: NameIdKey;
  slug: string;
  timezone: RealmTimezone;
  type: { name: RealmType; type: RealmTypeCapitalized };
}

interface RealmLockedStatus {
  is_locked_for_new_characters: boolean;
  is_locked_for_pct: boolean;
}

type RealmPopulation = 'Full' | 'High' | 'Low' | 'Medium' | 'New Players';

type RealmPopulationCapitalized = 'FULL' | 'HIGH' | 'LOW' | 'MEDIUM' | 'RECOMMENDED';

type RealmStatus = 'Down' | 'Up';

interface SearchRealm {
  category: Record<Locales, string | undefined>;
  id: number;
  is_tournament: boolean;
  locale: RealmLocales;
  name: Record<Locales, string | undefined>;
  region: { id: number; name: Record<Locales, string | undefined> };
  slug: string;
  timezone: RealmTimezone;
  type: { name: Record<Locales, string | undefined>; type: RealmTypeCapitalized };
}

interface SearchRealmPopulation {
  name: Record<Locales, string>;
  type: RealmPopulationCapitalized;
}

interface SearchRealmStatus {
  name: Record<Locales, string>;
  type: Uppercase<RealmStatus>;
}
