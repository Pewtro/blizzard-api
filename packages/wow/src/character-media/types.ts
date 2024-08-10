import type { Href, NameIdKey } from '../base';

export interface CharacterMediaSummaryResponse {
  _links: { self: Href };
  assets: Array<Asset>;
  character: Character;
}

interface Asset {
  key: string;
  value: string;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}
