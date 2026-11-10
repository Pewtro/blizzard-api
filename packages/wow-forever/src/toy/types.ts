import type { KeyBase, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a toy index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyIndexResponse extends ResponseBase {
  toys: Array<NullishNameIdKey>;
}

/**
 * The response for a toy.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyResponse extends ResponseBase {
  id: number;
  item: NullishNameIdKey;
  media: Media;
  should_exclude_if_uncollected?: boolean;
  source: Source;
  source_description?: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  name: string;
  type: string;
}
