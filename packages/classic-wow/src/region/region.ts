import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type { RegionIndexResponse, RegionResponse } from './types';

export const classicRegionApi = {
  /**
   * Get a region by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param regionId The region ID.
   * @returns The region. See {@link RegionResponse}.
   */
  region: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    regionId: number,
  ): Resource<RegionResponse> => {
    return {
      path: `${base}/region/${regionId}`,
      namespace,
    };
  },
  /**
   * Get a region index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The region index. See {@link RegionIndexResponse}.
   */
  regionIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  ): Resource<RegionIndexResponse> => {
    return {
      path: `${base}/region/index`,
      namespace,
    };
  },
};
