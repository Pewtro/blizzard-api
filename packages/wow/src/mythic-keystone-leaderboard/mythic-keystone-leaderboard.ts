import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const mythicKeystoneLeaderboardApi = {
  mythicKeystoneLeaderboard: (connectedRealmId: number, dungeonId: number, period: number): Resource<void> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneLeaderboardIndex: (connectedRealmId: number): Resource<void> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`,
      namespace: 'dynamic',
    };
  },
};
