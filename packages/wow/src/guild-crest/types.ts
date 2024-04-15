import type { KeyBase, ResponseBase } from '../base';

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

export interface GuildCrestBorderEmblemResponse extends ResponseBase {
  assets: Array<GuildCrestAsset>;
  id: number;
}

interface GuildCrestAsset {
  key: string;
  value: string;
}
