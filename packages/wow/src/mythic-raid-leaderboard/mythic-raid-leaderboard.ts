import type { Resource } from '@blizzard-api/core';
import type { Factions } from '../base';
import { base } from '../base';
import type { MythicRaidLeaderboardResponse } from './types';

export const mythicRaidLeaderboardApi = {
  mythicRaidLeaderboard: (
    raid: string,
    faction: Lowercase<keyof typeof Factions>,
  ): Resource<MythicRaidLeaderboardResponse> => {
    return {
      path: `${base}/leaderboard/hall-of-fame/${raid}/${faction}`,
      namespace: 'dynamic',
    };
  },
};
