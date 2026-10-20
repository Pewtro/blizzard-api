import { wowBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type { RegionIndexResponse, RegionResponse } from './types';

/**
 * Get a region by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param regionId The region ID.
 * @returns The region. See {@link RegionResponse}.
 */
export function region(namespace: DynamicClassicNamespaces, regionId: number): Resource<RegionResponse> {
  return {
    namespace,
    path: `${wowBasePath}/region/${regionId}`,
  };
}
/**
 * Get a region index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The region index. See {@link RegionIndexResponse}.
 */
export function regionIndex(namespace: DynamicClassicNamespaces): Resource<RegionIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/region/index`,
  };
}
