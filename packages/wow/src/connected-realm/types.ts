import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, NameIdKey, ResponseBase } from '../base';
import type { RealmCategory, RealmTimezone, RealmType, RealmTypeCapitalized, WithoutUnderscore } from '../realm/types';

type RealmPopulation = 'Low' | 'Medium' | 'High' | 'Full' | 'New Players';
type RealmPopulationCapitalized = 'LOW' | 'MEDIUM' | 'HIGH' | 'FULL' | 'RECOMMENDED';
type RealmStatus = 'Up' | 'Down';

/**
 * Connected Realm Index API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmIndexResponse extends ResponseBase {
  connected_realms: Array<{ href: string }>;
}

interface Realm {
  id: number;
  region: NameIdKey;
  connected_realm: { href: string };
  name: string;
  category: RealmCategory;
  locale: WithoutUnderscore<Locales>;
  timezone: RealmTimezone;
  type: { type: RealmTypeCapitalized; name: RealmType };
  is_tournament: boolean;
  slug: string;
}

interface RealmLockedStatus {
  is_locked_for_pct: boolean;
  is_locked_for_new_characters: boolean;
}

/**
 * Connected Realm API response.
 * @see https://develop.battle.net/documentation/world-of-warcraft/game-data-apis
 */
export interface ConnectedRealmResponse extends ResponseBase {
  id: number;
  has_queue: boolean;
  status: { type: Uppercase<RealmStatus>; name: RealmStatus };
  population: { type: RealmPopulationCapitalized; name: RealmPopulation };
  realms: Array<Realm>;
  mythic_leaderboards: { href: string };
  auctions: { href: string };
  realm_locked_status?: RealmLockedStatus;
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

interface SearchRealm {
  is_tournament: boolean;
  timezone: RealmTimezone;
  name: Record<Locales, string | undefined>;
  id: number;
  category: Record<Locales, string | undefined>;
  region: { name: Record<Locales, string | undefined>; id: number };
  locale: WithoutUnderscore<Locales>;
  type: { type: RealmTypeCapitalized; name: Record<Locales, string | undefined> };
  slug: string;
}

interface SearchRealmStatus {
  type: Uppercase<RealmStatus>;
  name: Record<Locales, string>;
}

interface SearchRealmPopulation {
  type: RealmPopulationCapitalized;
  name: Record<Locales, string>;
}

/**
 * Connected Realm Search API response item.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ConnectedRealmSearchResponseItem extends KeyBase {
  data: {
    id: number;
    has_queue: boolean;
    realms: Array<SearchRealm>;
    status: SearchRealmStatus;
    population: SearchRealmPopulation;
  };
}
