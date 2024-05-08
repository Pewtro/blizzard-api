import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type { PlayableRaceIndexResponse, PlayableRaceResponse } from './types';

export const classicPlayableRaceApi = {
  /**
   * Get a playable race by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param playableRaceId The playable race ID.
   * @returns The playable race. See {@link PlayableRaceResponse}.
   */
  playableRace: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    playableRaceId: number,
  ): Resource<PlayableRaceResponse> => {
    return {
      namespace,
      path: `${base}/playable-race/${playableRaceId}`,
    };
  },
  /**
   * Get a playable race index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The playable race index. See {@link PlayableRaceIndexResponse}.
   */
  playableRaceIndex: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  ): Resource<PlayableRaceIndexResponse> => {
    return {
      namespace,
      path: `${base}/playable-race/index`,
    };
  },
};
