import type { Character, Href, NameIdKey, ResponseBase } from '../base';

export interface CharacterCompletedQuestsResponse extends ResponseBase {
  character: Character;
  quests: Array<NameIdKey>;
}

export interface CharacterQuestsResponse extends ResponseBase {
  character: Character;
  completed: Href;
  in_progress: Array<NameIdKey>;
}
