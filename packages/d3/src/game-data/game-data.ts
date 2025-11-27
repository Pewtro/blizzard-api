import { d3GameDataBasePath  } from '@blizzard-api/core';
import type {Resource} from '@blizzard-api/core';
import type {
  EraIndexResponse,
  EraLeaderboardResponse,
  EraResponse,
  SeasonIndexResponse,
  SeasonLeaderboardResponse,
  SeasonResponse,
} from './types';

/**
 * Returns the era information for the specified era ID.
 * @param id The ID of the era.
 * @returns The era resource. See {@link EraResponse}.
 */
export function era(id: number): Resource<EraResponse> {
  return {
    path: `${d3GameDataBasePath}/era/${id}`,
  };
}

/**
 * Returns the era index.
 * @returns The era index resource. See {@link EraIndexResponse}.
 */
export function eraIndex(): Resource<EraIndexResponse> {
  return {
    path: `${d3GameDataBasePath}/era`,
  };
}

/**
 * Returns the era leaderboard for the specified era ID and leaderboard.
 * @param id The ID of the era.
 * @param leaderboard The name of the leaderboard.
 * @returns The era leaderboard resource. See {@link EraLeaderboardResponse}.
 */
export function eraLeaderboard(id: number, leaderboard: string): Resource<EraLeaderboardResponse> {
  return {
    path: `${d3GameDataBasePath}/era/${id}/leaderboard/${leaderboard}`,
  };
}

/**
 * Returns the season information for the specified season ID.
 * @param id The ID of the season.
 * @returns The season resource. See {@link SeasonResponse}.
 */
export function season(id: number): Resource<SeasonResponse> {
  return {
    path: `${d3GameDataBasePath}/season/${id}`,
  };
}

/**
 * Returns the season index.
 * @returns The season index resource. See {@link SeasonIndexResponse}.
 */
export function seasonIndex(): Resource<SeasonIndexResponse> {
  return {
    path: `${d3GameDataBasePath}/season`,
  };
}

/**
 * Returns the season leaderboard for the specified season ID and leaderboard.
 * @param id The ID of the season.
 * @param leaderboard The name of the leaderboard.
 * @returns The season leaderboard resource. See {@link SeasonLeaderboardResponse}.
 */
export function seasonLeaderboard(id: number, leaderboard: string): Resource<SeasonLeaderboardResponse> {
  return {
    path: `${d3GameDataBasePath}/season/${id}/leaderboard/${leaderboard}`,
  };
}
