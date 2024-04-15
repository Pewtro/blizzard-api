import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { PvpTierIndexResponse, PvpTierMediaResponse, PvpTierResponse } from './types';

export const pvpTierApi = {
  pvpTier: (pvpTierId: number): Resource<PvpTierResponse> => {
    return {
      path: `${base}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
  pvpTierIndex: (): Resource<PvpTierIndexResponse> => {
    return {
      path: `${base}/pvp-tier/index`,
      namespace: 'static',
    };
  },
  pvpTierMedia: (pvpTierId: number): Resource<PvpTierMediaResponse> => {
    return {
      path: `${mediaBase}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
};
