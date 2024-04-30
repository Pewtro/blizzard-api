import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
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

export interface SpellSearchParameters extends BaseSearchParameters {
  name: string;
  locale: Locales;
}

export interface SpellSearchResponseItem extends KeyBase {
  data: {
    name: Record<Locales, string | undefined>;
    id: number;
    media: { id: number };
  };
}
