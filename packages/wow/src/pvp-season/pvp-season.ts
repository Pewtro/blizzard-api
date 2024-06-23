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
    namespace: 'dynamic',
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${bracket}`,
  };
}
/**
 * Get a PvP leaderboard index by PvP season ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP leaderboard index. See {@link PvpLeaderboardIndexResponse}.
 */
export function pvpLeaderboardIndex(pvpSeasonId: number): Resource<PvpLeaderboardIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
  };
}
/**
 * Get a PvP reward index by PvP season ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP reward index. See {@link PvpRewardsIndexResponse}.
 */
export function pvpRewardsIndex(pvpSeasonId: number): Resource<PvpRewardsIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
  };
}
/**
 * Get a PvP season by ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season. See {@link PvpSeasonResponse}.
 */
export function pvpSeason(pvpSeasonId: number): Resource<PvpSeasonResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/pvp-season/${pvpSeasonId}`,
  };
}
/**
 * Get a PvP season index.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpSeasonIndex(): Resource<PvpSeasonIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/pvp-season/index`,
  };
}
