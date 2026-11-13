import { wowBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type { MythicKeystoneLeaderboardIndexResponse, MythicKeystoneLeaderboardResponse } from './types';

/**
 * Get a Mythic Keystone leaderboard by connected realm ID, dungeon ID, and period.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param connectedRealmId The connected realm ID.
 * @param dungeonId The dungeon ID.
 * @param period The period ID.
 * @returns The Mythic Keystone leaderboard. See {@link MythicKeystoneLeaderboardResponse}.
 */
export function mythicKeystoneLeaderboard(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  connectedRealmId: number,
  dungeonId: number,
  period: number,
): Resource<MythicKeystoneLeaderboardResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/${encodeURIComponent(connectedRealmId)}/mythic-leaderboard/${encodeURIComponent(dungeonId)}/period/${encodeURIComponent(period)}`,
  };
}
/**
 * Get a Mythic Keystone leaderboard index by connected realm ID.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param connectedRealmId The connected realm ID.
 * @returns The Mythic Keystone leaderboard index. See {@link MythicKeystoneLeaderboardIndexResponse}.
 */
export function mythicKeystoneLeaderboardIndex(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  connectedRealmId: number,
): Resource<MythicKeystoneLeaderboardIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/${encodeURIComponent(connectedRealmId)}/mythic-leaderboard/index`,
  };
}
