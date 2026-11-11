import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character's completed quests.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterCompletedQuestsResponse extends ResponseBase {
  character: CharacterReference;
  quests: Array<NameIdKey>;
}

/**
 * The response for a character's quests.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterQuestsResponse extends ResponseBase {
  character: CharacterReference;
  completed: Href;
  in_progress: Array<NameIdKey>;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}
