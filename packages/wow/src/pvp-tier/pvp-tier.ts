import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { PvpTierIndexResponse, PvpTierMediaResponse, PvpTierResponse } from './types';

export const pvpTierApi = {
  /**
   * Get a PvP tier by ID.
   * @param pvpTierId The PvP tier ID.
   * @returns The PvP tier. See {@link PvpTierResponse}.
   */
  pvpTier: (pvpTierId: number): Resource<PvpTierResponse> => {
    return {
      path: `${base}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a PvP tier index.
   * @returns The PvP tier index. See {@link PvpTierIndexResponse}.
   */
  pvpTierIndex: (): Resource<PvpTierIndexResponse> => {
    return {
      path: `${base}/pvp-tier/index`,
      namespace: 'static',
    };
  },
  /**
   * Get PvP tier media by ID.
   * @param pvpTierId The PvP tier ID.
   * @returns The PvP tier media. See {@link PvpTierMediaResponse}.
   */
  pvpTierMedia: (pvpTierId: number): Resource<PvpTierMediaResponse> => {
    return {
      path: `${mediaBase}/pvp-tier/${pvpTierId}`,
      namespace: 'static',
    };
  },
};
