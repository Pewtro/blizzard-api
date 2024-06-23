import type { KeyBase, ResponseBase } from '../base';

/**
 * The response for the guild crest components index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildCrestComponentsIndexResponse extends ResponseBase {
  borders: Array<Border>;
  colors: Colors;
  emblems: Array<Border>;
}

interface Border {
  id: number;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Colors {
  backgrounds: Array<Background>;
  borders: Array<Background>;
  emblems: Array<Background>;
}

interface Background {
  id: number;
  rgba: RGBA;
}

interface RGBA {
  a: number;
  b: number;
  g: number;
  r: number;
}

/**
 * The response for a guild crest border or emblem.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildCrestBorderEmblemResponse extends ResponseBase {
  assets: Array<GuildCrestAsset>;
  id: number;
}

interface GuildCrestAsset {
  key: string;
  value: string;
}
