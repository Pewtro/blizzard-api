import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type { PvpTierIndexResponse, PvpTierMediaResponse, PvpTierResponse } from './types';

/**
 * Get a PvP tier by ID.
 * @param pvpTierId The PvP tier ID.
 * @returns The PvP tier. See {@link PvpTierResponse}.
 */
export function pvpTier(pvpTierId: number): Resource<PvpTierResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/pvp-tier/${pvpTierId}`,
  };
}
/**
 * Get a PvP tier index.
 * @returns The PvP tier index. See {@link PvpTierIndexResponse}.
 */
export function pvpTierIndex(): Resource<PvpTierIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/pvp-tier/index`,
  };
}
/**
 * Get PvP tier media by ID.
 * @param pvpTierId The PvP tier ID.
 * @returns The PvP tier media. See {@link PvpTierMediaResponse}.
 */
export function pvpTierMedia(pvpTierId: number): Resource<PvpTierMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/pvp-tier/${pvpTierId}`,
  };
}
