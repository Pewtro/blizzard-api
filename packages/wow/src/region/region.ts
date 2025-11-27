import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { RegionIndexResponse, RegionResponse } from './types';

/**
 * Get a region by ID.
 * @param regionId The region ID.
 * @returns The region. See {@link RegionResponse}.
 */
export function region(regionId: number): Resource<RegionResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/region/${regionId}`,
  };
}
/**
 * Get a region index.
 * @returns The region index. See {@link RegionIndexResponse}.
 */
export function regionIndex(): Resource<RegionIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/region/index`,
  };
}
