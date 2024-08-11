import type { NameIdKey, ResponseBase } from '../base';

export interface CharacterMediaSummaryResponse extends ResponseBase {
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
