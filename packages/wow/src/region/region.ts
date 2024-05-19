import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { RegionIndexResponse, RegionResponse } from './types';

/**
 * Get a region by ID.
 * @param regionId The region ID.
 * @returns The region. See {@link RegionResponse}.
 */
export function region(regionId: number): Resource<RegionResponse> {
  return {
    path: `${base}/region/${regionId}`,
    namespace: 'dynamic',
  };
}
/**
 * Get a region index.
 * @returns The region index. See {@link RegionIndexResponse}.
 */
export function regionIndex(): Resource<RegionIndexResponse> {
  return {
    path: `${base}/region/index`,
    namespace: 'dynamic',
  };
}
