import type { Character, NameIdKey, ResponseBase } from '../base';

export interface CharacterTitlesSummaryResponse extends ResponseBase {
  active_title: { display_string: string } & NameIdKey;
  character: Character;
  titles: Array<NameIdKey>;
}
