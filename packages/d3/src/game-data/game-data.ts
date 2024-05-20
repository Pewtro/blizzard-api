import type { Resource } from '@blizzard-api/core';
import { gameDataBase } from '../base';
import type {
  EraIndexResponse,
  EraLeaderboardResponse,
  EraResponse,
  SeasonIndexResponse,
  SeasonLeaderboardResponse,
  SeasonResponse,
} from './types';

export function seasonIndex(): Resource<SeasonIndexResponse> {
  return {
    path: `${gameDataBase}/season`,
  };
}

export function season(id: number): Resource<SeasonResponse> {
  return {
    path: `${gameDataBase}/season/${id}`,
  };
}

export function seasonLeaderboard(id: number, leaderboard: string): Resource<SeasonLeaderboardResponse> {
  return {
    path: `${gameDataBase}/season/${id}/leaderboard/${leaderboard}`,
  };
}

export function eraIndex(): Resource<EraIndexResponse> {
  return {
    path: `${gameDataBase}/era`,
  };
}

export function era(id: number): Resource<EraResponse> {
  return {
    path: `${gameDataBase}/era/${id}`,
  };
}

export function eraLeaderboard(id: number, leaderboard: string): Resource<EraLeaderboardResponse> {
  return {
    path: `${gameDataBase}/era/${id}/leaderboard/${leaderboard}`,
  };
}
