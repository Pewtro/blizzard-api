import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { MythicKeystoneLeaderboardIndexResponse, MythicKeystoneLeaderboardResponse } from './types';

export const mythicKeystoneLeaderboardApi = {
  /**
   * Get a Mythic Keystone leaderboard by connected realm ID, dungeon ID, and period.
   * @param connectedRealmId The connected realm ID.
   * @param dungeonId The dungeon ID.
   * @param period The period ID.
   * @returns The Mythic Keystone leaderboard. See {@link MythicKeystoneLeaderboardResponse}.
   */
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
  /**
   * Get a Mythic Keystone leaderboard index by connected realm ID.
   * @param connectedRealmId The connected realm ID.
   * @returns The Mythic Keystone leaderboard index. See {@link MythicKeystoneLeaderboardIndexResponse}.
   */
  mythicKeystoneLeaderboardIndex: (connectedRealmId: number): Resource<MythicKeystoneLeaderboardIndexResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`,
      namespace: 'dynamic',
    };
  },
};
