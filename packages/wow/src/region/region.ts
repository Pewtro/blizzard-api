import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const regionApi = {
  region: (regionId: number): Resource<void> => {
    return {
      path: `${base}/region/${regionId}`,
      namespace: 'static',
    };
  },
  regionIndex: (): Resource<void> => {
    return {
      path: `${base}/region/index`,
      namespace: 'static',
    };
  },
};
