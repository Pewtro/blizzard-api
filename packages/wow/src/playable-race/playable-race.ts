import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { PlayableRaceIndexResponse, PlayableRaceResponse } from './types';

/**
 * Get a playable race by ID.
 * @param playableRaceId The playable race ID.
 * @returns The playable race. See {@link PlayableRaceResponse}.
 */
export function playableRace(playableRaceId: number): Resource<PlayableRaceResponse> {
  return {
    namespace: 'static',
    path: `${base}/playable-race/${playableRaceId}`,
  };
}
/**
 * Get a playable race index.
 * @returns The playable race index. See {@link PlayableRaceIndexResponse}.
 */
export function playableRaceIndex(): Resource<PlayableRaceIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/playable-race/index`,
  };
}
