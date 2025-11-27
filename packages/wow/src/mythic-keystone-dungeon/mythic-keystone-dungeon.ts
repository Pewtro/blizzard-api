import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type {
  MythicKeystoneDungeonIndexResponse,
  MythicKeystoneDungeonResponse,
  MythicKeystoneIndexResponse,
  MythicKeystonePeriodIndexResponse,
  MythicKeystonePeriodResponse,
  MythicKeystoneSeasonIndexResponse,
  MythicKeystoneSeasonResponse,
} from './types';

/**
 * Get a Mythic Keystone dungeon by ID.
 * @param mythicKeystoneDungeonId The Mythic Keystone dungeon ID.
 * @returns The Mythic Keystone dungeon. See {@link MythicKeystoneDungeonResponse}.
 */
export function mythicKeystoneDungeon(mythicKeystoneDungeonId: number): Resource<MythicKeystoneDungeonResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`,
  };
}
/**
 * Get a Mythic Keystone dungeon index.
 * @returns The Mythic Keystone dungeon index. See {@link MythicKeystoneDungeonIndexResponse}.
 */
export function mythicKeystoneDungeonIndex(): Resource<MythicKeystoneDungeonIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/dungeon/index`,
  };
}
/**
 * Get a Mythic Keystone index.
 * @returns The Mythic Keystone index. See {@link MythicKeystoneIndexResponse}.
 */
export function mythicKeystoneIndex(): Resource<MythicKeystoneIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/index`,
  };
}
/**
 * Get a Mythic Keystone period by ID.
 * @param mythicKeystonePeriodId The Mythic Keystone period ID.
 * @returns The Mythic Keystone period. See {@link MythicKeystonePeriodResponse}.
 */
export function mythicKeystonePeriod(mythicKeystonePeriodId: number): Resource<MythicKeystonePeriodResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/period/${mythicKeystonePeriodId}`,
  };
}
/**
 * Get a Mythic Keystone period index.
 * @returns The Mythic Keystone period index. See {@link MythicKeystonePeriodIndexResponse}.
 */
export function mythicKeystonePeriodIndex(): Resource<MythicKeystonePeriodIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/period/index`,
  };
}
/**
 * Get a Mythic Keystone season by ID.
 * @param mythicKeystoneSeasonId The Mythic Keystone season ID.
 * @returns The Mythic Keystone season. See {@link MythicKeystoneSeasonResponse}.
 */
export function mythicKeystoneSeason(mythicKeystoneSeasonId: number): Resource<MythicKeystoneSeasonResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/season/${mythicKeystoneSeasonId}`,
  };
}
/**
 * Get a Mythic Keystone season index.
 * @returns The Mythic Keystone season index. See {@link MythicKeystoneSeasonIndexResponse}.
 */
export function mythicKeystoneSeasonIndex(): Resource<MythicKeystoneSeasonIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/mythic-keystone/season/index`,
  };
}
