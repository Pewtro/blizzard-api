import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  PvpLeaderboardIndexResponse,
  PvpLeaderboardResponse,
  PvpRewardsIndexResponse,
  PvpSeasonIndexResponse,
  PvpSeasonResponse,
} from './types';

export const pvpSeasonApi = {
  pvpLeaderboard: (pvpSeasonId: number, bracket: string): Resource<PvpLeaderboardResponse> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`,
      namespace: 'dynamic',
    };
  },
  pvpLeaderboardIndex: (pvpSeasonId: number): Resource<PvpLeaderboardIndexResponse> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
      namespace: 'dynamic',
    };
  },
  pvpRewardsIndex: (pvpSeasonId: number): Resource<PvpRewardsIndexResponse> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
      namespace: 'dynamic',
    };
  },
  pvpSeason: (pvpSeasonId: number): Resource<PvpSeasonResponse> => {
    return {
      path: `${base}/pvp-season/${pvpSeasonId}`,
      namespace: 'dynamic',
    };
  },
  pvpSeasonIndex: (): Resource<PvpSeasonIndexResponse> => {
    return {
      path: `${base}/pvp-season/index`,
      namespace: 'dynamic',
    };
  },
};
