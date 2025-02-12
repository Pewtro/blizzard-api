import type { Resource } from '@blizzard-api/core';
import type { AllMetadataResponse, SpecificMetadataResponse } from './types';

/**
 * Returns all metadata
 * @returns The all metadata resource. See {@link AllMetadataResponse}.
 */
export function allMetadata(): Resource<AllMetadataResponse> {
  return {
    path: 'hearthstone/metadata',
  };
}

/**
 * Returns specific metadata based on the type requested.
 * @param type The type of metadata to retrieve.
 * @returns The specific metadata resource. See {@link SpecificMetadataResponse}.
 */
export function specificMetadata(
  type: 'classes' | 'keywords' | 'minionTypes' | 'rarities' | 'setGroups' | 'sets' | 'types',
): Resource<SpecificMetadataResponse> {
  return {
    path: `hearthstone/metadata/${type}`,
  };
}
