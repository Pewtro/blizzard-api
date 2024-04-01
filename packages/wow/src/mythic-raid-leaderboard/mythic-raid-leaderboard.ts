import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const mythicRaidLeaderboardApi = {
  //TODO Implement a better type than string for raid
  mythicRaidLeaderboard: (raid: string, faction: 'alliance' | 'horde'): Resource<void> => {
    return {
      path: `${base}/leaderboard/hall-of-fame/${raid}/${faction}`,
      namespace: 'dynamic',
    };
  },
};
