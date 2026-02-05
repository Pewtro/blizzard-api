import { wowBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import type { PlayableRaceIndexResponse, PlayableRaceResponse } from './types';

/**
 * Get a playable race by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param playableRaceId The playable race ID.
 * @returns The playable race. See {@link PlayableRaceResponse}.
 */
export function playableRace(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  playableRaceId: number,
): Resource<PlayableRaceResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-race/${playableRaceId}`,
  };
}
/**
 * Get a playable race index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The playable race index. See {@link PlayableRaceIndexResponse}.
 */
export function playableRaceIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
): Resource<PlayableRaceIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-race/index`,
  };
}
