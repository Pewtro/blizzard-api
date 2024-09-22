import type { Resource } from '@blizzard-api/core';
import { starcraftRegion, type StarcraftRegion } from '../base';
import type { GrandmasterLeaderboardResponse, SeasonResponse } from './types';

export function grandmasterLeaderboard(regionId: StarcraftRegion): Resource<GrandmasterLeaderboardResponse> {
  return {
    path: `/sc2/ladder/grandmaster/${starcraftRegion[regionId]}`,
  };
}

export function season(regionId: StarcraftRegion): Resource<SeasonResponse> {
  return {
    path: `/sc2/ladder/season/${starcraftRegion[regionId]}`,
  };
}
