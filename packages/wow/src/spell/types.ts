import type { KeyBase, MediaAsset, NameId, ResponseBase } from '../base';

export interface SpellResponse extends ResponseBase, NameId {
  description: null | string;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

export interface SpellMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
