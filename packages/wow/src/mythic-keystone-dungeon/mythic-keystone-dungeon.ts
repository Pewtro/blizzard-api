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
  mythicKeystoneDungeon: (mythicKeystoneDungeonId: number): Resource<MythicKeystoneDungeonResponse> => {
    return {
      path: `${base}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneDungeonIndex: (): Resource<MythicKeystoneDungeonIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/dungeon/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneIndex: (): Resource<MythicKeystoneIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystonePeriod: (mythicKeystonePeriodId: number): Resource<MythicKeystonePeriodResponse> => {
    return {
      path: `${base}/mythic-keystone/period/${mythicKeystonePeriodId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystonePeriodIndex: (): Resource<MythicKeystonePeriodIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/period/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneSeason: (mythicKeystoneSeasonId: number): Resource<MythicKeystoneSeasonResponse> => {
    return {
      path: `${base}/mythic-keystone/season/${mythicKeystoneSeasonId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneSeasonIndex: (): Resource<MythicKeystoneSeasonIndexResponse> => {
    return {
      path: `${base}/mythic-keystone/season/index`,
      namespace: 'dynamic',
    };
  },
};
