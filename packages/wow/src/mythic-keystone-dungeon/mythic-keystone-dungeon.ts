import { base } from '../base';

export const mythicKeystoneDungeonApi = {
  mythicKeystoneDungeon: (mythicKeystoneDungeonId: number) => {
    return {
      path: `${base}/mythic-keystone/dungeon/${mythicKeystoneDungeonId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneDungeonIndex: () => {
    return {
      path: `${base}/mythic-keystone/dungeon/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneIndex: () => {
    return {
      path: `${base}/mythic-keystone/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystonePeriod: (mythicKeystonePeriodId: number) => {
    return {
      path: `${base}/mythic-keystone/period/${mythicKeystonePeriodId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystonePeriodIndex: () => {
    return {
      path: `${base}/mythic-keystone/period/index`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneSeason: (mythicKeystoneSeasonId: number) => {
    return {
      path: `${base}/mythic-keystone/season/${mythicKeystoneSeasonId}`,
      namespace: 'dynamic',
    };
  },
  mythicKeystoneSeasonIndex: () => {
    return {
      path: `${base}/mythic-keystone/season/index`,
      namespace: 'dynamic',
    };
  },
};
