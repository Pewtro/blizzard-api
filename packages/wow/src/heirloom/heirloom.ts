import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { HeirloomIndexResponse, HeirloomResponse } from './types';

export const heirloomApi = {
  heirloom: (heirloomId: number): Resource<HeirloomResponse> => {
    return {
      path: `${base}/heirloom/${heirloomId}`,
      namespace: 'static',
    };
  },
  heirloomIndex: (): Resource<HeirloomIndexResponse> => {
    return {
      path: `${base}/heirloom/index`,
      namespace: 'static',
    };
  },
};
