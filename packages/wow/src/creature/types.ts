import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
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

export interface CreatureSearchParameters extends BaseSearchParameters {
  name: string;
  locale: Locales;
}

export interface CreatureSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    is_tameable: boolean;
    name: Record<Locales, string | undefined>;
    id: number;
    type: { id: number; name: Record<Locales, string | undefined> };
    family?: { id: number; name: Record<Locales, string | undefined> };
  };
}
