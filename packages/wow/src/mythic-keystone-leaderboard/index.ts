import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { MythicKeystoneLeaderboardIndexResponse, MythicKeystoneLeaderboardResponse } from './types';

/**
 * Get a Mythic Keystone leaderboard by connected realm ID, dungeon ID, and period.
 * @param connectedRealmId The connected realm ID.
 * @param dungeonId The dungeon ID.
 * @param period The period ID.
 * @returns The Mythic Keystone leaderboard. See {@link MythicKeystoneLeaderboardResponse}.
 */
export function mythicKeystoneLeaderboard(
  connectedRealmId: number,
  dungeonId: number,
  period: number,
): Resource<MythicKeystoneLeaderboardResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/connected-realm/${connectedRealmId}/mythic-leaderboard/${dungeonId}/period/${period}`,
  };
}
/**
 * Get a Mythic Keystone leaderboard index by connected realm ID.
 * @param connectedRealmId The connected realm ID.
 * @returns The Mythic Keystone leaderboard index. See {@link MythicKeystoneLeaderboardIndexResponse}.
 */
export function mythicKeystoneLeaderboardIndex(
  connectedRealmId: number,
): Resource<MythicKeystoneLeaderboardIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/connected-realm/${connectedRealmId}/mythic-leaderboard/index`,
  };
}
