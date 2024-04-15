import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { PlayableRaceIndexResponse, PlayableRaceResponse } from './types';

export const playableRaceApi = {
  playableRace: (playableRaceId: number): Resource<PlayableRaceResponse> => {
    return {
      path: `${base}/playable-race/${playableRaceId}`,
      namespace: 'static',
    };
  },
  playableRaceIndex: (): Resource<PlayableRaceIndexResponse> => {
    return {
      path: `${base}/playable-race/index`,
      namespace: 'static',
    };
  },
};
