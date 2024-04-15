import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { MythicKeystoneLeaderboardIndexResponse, MythicKeystoneLeaderboardResponse } from './types';

export const mythicKeystoneLeaderboardApi = {
  mythicKeystoneLeaderboard: (
    connectedRealmId: number,
    dungeonId: number,
    period: number,
  ): Resource<MythicKeystoneLeaderboardResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneLeaderboardIndex: (connectedRealmId: number): Resource<MythicKeystoneLeaderboardIndexResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`,
      namespace: 'dynamic',
    };
  },
};
