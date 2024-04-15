import type { NameId, NameIdKey, ResponseBase } from '../base';

export interface RealmIndexResponse extends ResponseBase {
  realms: Array<Realm>;
}

interface Realm extends NameIdKey {
  slug: string;
}

export interface RealmResponse extends ResponseBase, NameId {
  region: NameIdKey;
  connected_realm: { href: string };
  category: string;
  locale: string;
  timezone: string;
  type: Type;
  is_tournament: boolean;
  slug: string;
}

interface Type {
  type: string;
  name: string;
}
