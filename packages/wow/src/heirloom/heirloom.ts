import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const heirloomApi = {
  heirloom: (heirloomId: number): Resource<void> => {
    return {
      path: `${base}/heirloom/${heirloomId}`,
      namespace: 'static',
    };
  },
  heirloomIndex: (): Resource<void> => {
    return {
      path: `${base}/heirloom/index`,
      namespace: 'static',
    };
  },
};
