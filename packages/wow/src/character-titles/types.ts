import type { Character, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterTitlesSummaryResponse extends ResponseBase {
  active_title: NameIdKey & { display_string: string };
  character: Character;
  titles: Array<NameIdKey>;
}
