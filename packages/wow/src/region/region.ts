import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { RegionIndexResponse, RegionResponse } from './types';

export const regionApi = {
  region: (regionId: number): Resource<RegionResponse> => {
    return {
      path: `${base}/region/${regionId}`,
      namespace: 'dynamic',
    };
  },
  regionIndex: (): Resource<RegionIndexResponse> => {
    return {
      path: `${base}/region/index`,
      namespace: 'dynamic',
    };
  },
};
