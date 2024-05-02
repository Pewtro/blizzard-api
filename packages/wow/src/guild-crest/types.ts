import type { KeyBase, ResponseBase } from '../base';

/**
 * The response for the guild crest components index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildCrestComponentsIndexResponse extends ResponseBase {
  emblems: Array<Border>;
  borders: Array<Border>;
  colors: Colors;
}

interface Border {
  id: number;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Colors {
  emblems: Array<Background>;
  borders: Array<Background>;
  backgrounds: Array<Background>;
}

interface Background {
  id: number;
  rgba: RGBA;
}

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
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
