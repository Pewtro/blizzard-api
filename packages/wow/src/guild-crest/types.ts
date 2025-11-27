import type { KeyBase, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a guild crest border or emblem.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildCrestBorderEmblemResponse extends ResponseBase {
  assets: Array<GuildCrestAsset>;
  id: number;
}

/**
 * The response for the guild crest components index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildCrestComponentsIndexResponse extends ResponseBase {
  borders: Array<Border>;
  colors: Colors;
  emblems: Array<Border>;
}

interface Background {
  id: number;
  rgba: RGBA;
}

interface Border {
  id: number;
  media: Media;
}

interface Colors {
  backgrounds: Array<Background>;
  borders: Array<Background>;
  emblems: Array<Background>;
}

interface GuildCrestAsset {
  key: string;
  value: string;
}

interface Media extends KeyBase {
  id: number;
}

interface RGBA {
  a: number;
  b: number;
  g: number;
  r: number;
}
