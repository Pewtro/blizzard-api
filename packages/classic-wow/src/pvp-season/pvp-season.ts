import {   wowBasePath } from '@blizzard-api/core';
import type {BlizzardNamespaces, Resource} from '@blizzard-api/core';
import type { PvpSeasonIndexResponse, PvpSeasonResponse } from './types';

/**
 * Get a PvP leaderboard by PvP season ID and bracket.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @param pvpBracket The PvP bracket.
 * @returns The PvP leaderboard.
 */
export function pvpLeaderboard(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpRegionId: number,
  pvpSeasonId: number,
  pvpBracket: string,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
  };
}
/**
 * Returns an index of PvP leaderboards for a PvP season in a given PvP region.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP leaderboard index.
 */
export function pvpLeaderboardIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
  };
}
/**
 * Returns a PvP season by region ID and season ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season.
 */
export function pvpRegionalSeason(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}`,
  };
}
/**
 * Returns an index of PvP Seasons in a PvP region.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpRegionalSeasonIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpRegionId: number,
): Resource<PvpSeasonIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/index`,
  };
}
/**
 * Returns an index of PvP Regions.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The PvP region index.
 */
export function pvpRegionIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/index`,
  };
}
/**
 * Returns an index of PvP rewards for a PvP season in a given PvP region.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP reward index.
 */
export function pvpRewardsIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
  };
}
/**
 * Get a PvP season by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season. See {@link PvpSeasonResponse}.
 */
export function pvpSeason(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  pvpSeasonId: number,
): Resource<PvpSeasonResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/${pvpSeasonId}`,
  };
}
/**
 * Get a PvP season index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpSeasonIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
): Resource<PvpSeasonIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/index`,
  };
}
