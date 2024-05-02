import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { PlayableRaceIndexResponse, PlayableRaceResponse } from './types';

export const playableRaceApi = {
  /**
   * Get a playable race by ID.
   * @param playableRaceId The playable race ID.
   * @returns The playable race. See {@link PlayableRaceResponse}.
   */
  playableRace: (playableRaceId: number): Resource<PlayableRaceResponse> => {
    return {
      path: `${base}/playable-race/${playableRaceId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a playable race index.
   * @returns The playable race index. See {@link PlayableRaceIndexResponse}.
   */
  playableRaceIndex: (): Resource<PlayableRaceIndexResponse> => {
    return {
      path: `${base}/playable-race/index`,
      namespace: 'static',
    };
  },
};
