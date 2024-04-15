import type { KeyBase, MediaAsset, NameIdKey, ResponseBase } from '../base';

export interface CreatureResponse extends ResponseBase {
  id: number;
  name: string;
  type: NameIdKey;
  family: NameIdKey;
  creature_displays: Array<CreatureDisplay>;
  is_tameable: boolean;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

export interface CreatureDisplayMediaResponse extends ResponseBase {
  assets: Array<DisplayMediaAsset>;
  id: number;
}

interface DisplayMediaAsset {
  key: string;
  value: string;
}

export interface CreatureFamilyIndexResponse extends ResponseBase {
  creature_families: Array<NameIdKey>;
}

export interface CreatureFamilyResponse extends ResponseBase {
  id: number;
  name: string;
  specialization: NameIdKey;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

export interface CreatureFamilyMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

export interface CreatureTypeIndexResponse extends ResponseBase {
  creature_types: Array<NameIdKey>;
}

export interface CreatureTypeResponse extends ResponseBase {
  id: number;
  name: string;
}
