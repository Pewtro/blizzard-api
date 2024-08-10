import type { Href, NameIdKey, ResponseBase } from '../base';

export interface CharacterQuestsResponse extends ResponseBase {
  character: Character;
  completed: Href;
  in_progress: Array<Character>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

export interface CharacterCompletedQuestsResponse extends ResponseBase {
  character: Character;
  quests: Array<NameIdKey>;
}
