import type { KeyBase, ResponseBase } from '../base';

export interface ConnectedRealmIndexResponse extends ResponseBase {
  connected_realms: Array<{ href: string }>;
}

type RealmStatus = 'Up' | 'Down';
type RealmPopulation = 'Low' | 'Medium' | 'High' | 'Full';
type RealmType = 'Normal';

interface RealmRegion extends KeyBase {
  name: string;
  id: number;
}

interface Realm {
  id: number;
  region: RealmRegion;
  connected_realm: { href: string };
  name: string;
  category: string;
  locale: string;
  timezone: string;
  type: { type: Uppercase<RealmType>; name: RealmType };
  is_tournament: boolean;
  slug: string;
}

export interface ConnectedRealmResponse extends ResponseBase {
  id: number;
  has_queue: boolean;
  status: { type: Uppercase<RealmStatus>; name: RealmStatus };
  population: { type: Uppercase<RealmPopulation>; name: RealmPopulation };
  realms: Array<Realm>;
  mythic_leaderboards: { href: string };
  auctions: { href: string };
}
