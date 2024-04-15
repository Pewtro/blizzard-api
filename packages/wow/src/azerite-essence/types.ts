import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface AzeriteEssenceIndexResponse extends ResponseBase {
  azerite_essences: Array<NameIdKey>;
}

export interface AzeriteEssenceResponse extends ResponseBase, NameId {
  allowed_specializations: Array<NameIdKey>;
  powers: Array<Power>;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Power {
  id: number;
  rank: number;
  main_power_spell: NameIdKey;
  passive_power_spell: NameIdKey;
}

export interface AzeriteEssenceMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
