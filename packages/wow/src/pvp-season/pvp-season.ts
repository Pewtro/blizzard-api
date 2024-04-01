import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const pvpSeasonApi = {
  pvpLeaderboard: (pvpSeasonId: number, bracket: string): Resource<void> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`,
      namespace: 'dynamic',
    };
  },
  pvpLeaderboardIndex: (pvpSeasonId: number): Resource<void> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
      namespace: 'dynamic',
    };
  },
  pvpRewardsIndex: (pvpSeasonId: number): Resource<void> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
      namespace: 'dynamic',
    };
  },
  pvpSeason: (pvpSeasonId: number): Resource<void> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}`,
      namespace: 'dynamic',
    };
  },
  pvpSeasonIndex: (): Resource<void> => {
    return {
      path: `${base}/pvp-season/index`,
      namespace: 'dynamic',
    };
  },
};
