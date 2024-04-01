import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const pvpTierApi = {
  pvpTier: (pvpTierId: number): Resource<void> => {
    return {
      path: `${base}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
  pvpTierIndex: (): Resource<void> => {
    return {
      path: `${base}/pvp-tier/index`,
      namespace: 'static',
    };
  },
  pvpTierMedia: (pvpTierId: number): Resource<void> => {
    return {
      path: `${mediaBase}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
};
