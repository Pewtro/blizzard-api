import type { GenderName, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a title index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TitleIndexResponse extends ResponseBase {
  titles: Array<NameIdKey>;
}

/**
 * The response for a title.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TitleResponse extends NameId, ResponseBase {
  gender_name: GenderName;
}
