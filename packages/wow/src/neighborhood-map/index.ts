import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { NeighborhoodMapIndexResponse, NeighborhoodMapResponse, NeighborhoodResponse } from './types';

/**
 * Get an index of neighborhood maps.
 * @returns The neighborhood map index. See {@link NeighborhoodMapIndexResponse}.
 */
export function neighborhoodMaps(): Resource<NeighborhoodMapIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/neighborhood-map/index`,
  };
}

/**
 * Get a neighborhood map by ID.
 * @param neighborhoodMapId The neighborhood map ID.
 * @returns The neighborhood map. See {@link NeighborhoodMapResponse}.
 */
export function neighborhoodMap(neighborhoodMapId: number): Resource<NeighborhoodMapResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/neighborhood-map/${neighborhoodMapId}`,
  };
}

/**
 * Get a neighborhood within a neighborhood map by ID.
 * @param neighborhoodMapId The neighborhood map ID.
 * @param neighborhoodId The neighborhood ID.
 * @returns The neighborhood. See {@link NeighborhoodResponse}.
 */
export function neighborhood(neighborhoodMapId: number, neighborhoodId: number): Resource<NeighborhoodResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/neighborhood-map/${neighborhoodMapId}/neighborhood/${neighborhoodId}`,
  };
}
