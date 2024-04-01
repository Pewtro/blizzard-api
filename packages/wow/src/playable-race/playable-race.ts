import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const playableRaceApi = {
  playableRace: (playableRaceId: number): Resource<void> => {
    return {
      path: `${base}/playable-race/${playableRaceId}`,
      namespace: 'static',
    };
  },
  playableRaceIndex: (): Resource<void> => {
    return {
      path: `${base}/playable-race/index`,
      namespace: 'static',
    };
  },
};
