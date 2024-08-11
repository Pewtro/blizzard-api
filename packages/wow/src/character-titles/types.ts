import type { NameIdKey, ResponseBase } from '../base';

export interface CharacterTitlesSummaryResponse extends ResponseBase {
  active_title: { display_string: string } & NameIdKey;
  character: Character;
  titles: Array<NameIdKey>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}
