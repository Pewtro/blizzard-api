import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  PvpLeaderboardIndexResponse,
  PvpLeaderboardResponse,
  PvpRewardsIndexResponse,
  PvpSeasonIndexResponse,
  PvpSeasonResponse,
} from './types';

/**
 * Get a PvP leaderboard by PvP season ID and bracket.
 * @param pvpSeasonId The PvP season ID.
 * @param bracket The PvP bracket.
 * @returns The PvP leaderboard. See {@link PvpLeaderboardResponse}.
 */
export function pvpLeaderboard(pvpSeasonId: number, bracket: string): Resource<PvpLeaderboardResponse> {
  return {
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`,
    namespace: 'dynamic',
  };
}
/**
 * Get a PvP leaderboard index by PvP season ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP leaderboard index. See {@link PvpLeaderboardIndexResponse}.
 */
export function pvpLeaderboardIndex(pvpSeasonId: number): Resource<PvpLeaderboardIndexResponse> {
  return {
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
    namespace: 'dynamic',
  };
}
/**
 * Get a PvP reward index by PvP season ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP reward index. See {@link PvpRewardsIndexResponse}.
 */
export function pvpRewardsIndex(pvpSeasonId: number): Resource<PvpRewardsIndexResponse> {
  return {
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
    namespace: 'dynamic',
  };
}
/**
 * Get a PvP season by ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season. See {@link PvpSeasonResponse}.
 */
export function pvpSeason(pvpSeasonId: number): Resource<PvpSeasonResponse> {
  return {
    path: `${base}/pvp-season/${pvpSeasonId}`,
    namespace: 'dynamic',
  };
}
/**
 * Get a PvP season index.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpSeasonIndex(): Resource<PvpSeasonIndexResponse> {
  return {
    path: `${base}/pvp-season/index`,
    namespace: 'dynamic',
  };
}
