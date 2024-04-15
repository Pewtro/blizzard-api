import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface PvpTierIndexResponse extends ResponseBase {
  tiers: Array<NameIdKey>;
}

export interface PvpTierResponse extends ResponseBase, NameId {
  min_rating: number;
  max_rating: number;
  media: Media;
  bracket: Bracket;
  rating_type: number;
}

interface Bracket {
  id: number;
  type: string;
}

interface Media extends KeyBase {
  id: number;
}

export interface PvpTierMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
