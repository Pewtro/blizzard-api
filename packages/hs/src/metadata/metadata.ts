import type { Resource } from '@blizzard-api/core';
import type { AllMetadataResponse, SpecificMetadataResponse } from './types';

export function allMetadata(): Resource<AllMetadataResponse> {
  return {
    path: 'hearthstone/metadata',
  };
}

export function specificMetadata(
  type: 'classes' | 'keywords' | 'minionTypes' | 'rarities' | 'setGroups' | 'sets' | 'types',
): Resource<SpecificMetadataResponse> {
  return {
    path: `hearthstone/metadata/${type}`,
  };
}
