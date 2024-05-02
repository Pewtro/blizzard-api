import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  MythicKeystoneDungeonIndexResponse,
  MythicKeystoneDungeonResponse,
  MythicKeystoneIndexResponse,
  MythicKeystonePeriodIndexResponse,
  MythicKeystonePeriodResponse,
  MythicKeystoneSeasonIndexResponse,
  MythicKeystoneSeasonResponse,
} from './types';

export const mythicKeystoneDungeonApi = {
  /**
   * Get a Mythic Keystone dungeon by ID.
   * @param mythicKeystoneDungeonId The Mythic Keystone dungeon ID.
   * @returns The Mythic Keystone dungeon. See {@link MythicKeystoneDungeonResponse}.
   */
  mythicKeystoneDungeon: (mythicKeystoneDungeonId: number): Resource<MythicKeystoneDungeonResponse> => {
    return {
      path: `${base}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone dungeon index.
   * @returns The Mythic Keystone dungeon index. See {@link MythicKeystoneDungeonIndexResponse}.
   */
  mythicKeystoneDungeonIndex: (): Resource<MythicKeystoneDungeonIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/dungeon/index`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone index.
   * @returns The Mythic Keystone index. See {@link MythicKeystoneIndexResponse}.
   */
  mythicKeystoneIndex: (): Resource<MythicKeystoneIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/index`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone period by ID.
   * @param mythicKeystonePeriodId The Mythic Keystone period ID.
   * @returns The Mythic Keystone period. See {@link MythicKeystonePeriodResponse}.
   */
  mythicKeystonePeriod: (mythicKeystonePeriodId: number): Resource<MythicKeystonePeriodResponse> => {
    return {
      path: `${base}/mythic-keystone/period/${mythicKeystonePeriodId}`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone period index.
   * @returns The Mythic Keystone period index. See {@link MythicKeystonePeriodIndexResponse}.
   */
  mythicKeystonePeriodIndex: (): Resource<MythicKeystonePeriodIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/period/index`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone season by ID.
   * @param mythicKeystoneSeasonId The Mythic Keystone season ID.
   * @returns The Mythic Keystone season. See {@link MythicKeystoneSeasonResponse}.
   */
  mythicKeystoneSeason: (mythicKeystoneSeasonId: number): Resource<MythicKeystoneSeasonResponse> => {
    return {
      path: `${base}/mythic-keystone/season/${mythicKeystoneSeasonId}`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a Mythic Keystone season index.
   * @returns The Mythic Keystone season index. See {@link MythicKeystoneSeasonIndexResponse}.
   */
  mythicKeystoneSeasonIndex: (): Resource<MythicKeystoneSeasonIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/season/index`,
      namespace: 'dynamic',
    };
  },
};
