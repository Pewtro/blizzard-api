import type { Resource } from '@blizzard-api/core';
import { starcraftRegion } from '../regions';
import type { StarcraftRegion } from '../regions';
import type { GrandmasterLeaderboardResponse, SeasonResponse } from './types';

/**
 * Returns the grandmaster leaderboard for the specified region.
 * @param regionId The region ID
 * @returns The grandmaster leaderboard resource. See {@link GrandmasterLeaderboardResponse}.
 */
export function grandmasterLeaderboard(regionId: StarcraftRegion): Resource<GrandmasterLeaderboardResponse> {
  return {
    path: `/sc2/ladder/grandmaster/${starcraftRegion[regionId]}`,
  };
}

/**
 * Returns the season information for the specified region.
 * @param regionId The region ID
 * @returns The season resource. See {@link SeasonResponse}.
 */
export function season(regionId: StarcraftRegion): Resource<SeasonResponse> {
  return {
    path: `/sc2/ladder/season/${starcraftRegion[regionId]}`,
  };
}
