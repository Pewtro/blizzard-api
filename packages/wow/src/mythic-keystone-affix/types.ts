import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface MythicKeystoneAffixIndexResponse extends ResponseBase {
  affixes: Array<NameIdKey>;
}

export interface MythicKeystoneAffixResponse extends ResponseBase, NameId {
  description: string;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

export interface MythicKeystoneAffixMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
