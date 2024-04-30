import type { BaseSearchParameters } from '@blizzard-api/core';
import type { KeyBase } from '../base';

export interface MediaSearchParameters extends BaseSearchParameters {
  tags?: string;
}

export interface MediaSearchResponseItem extends KeyBase {
  data: {
    id: number;
    assets: Array<MediaAsset>;
  };
}

interface MediaAsset {
  file_data_id: number;
  key: string;
  value: string;
}
