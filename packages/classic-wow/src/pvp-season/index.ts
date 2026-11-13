import { wowBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type {
  PvpLeaderboardIndexResponse,
  PvpLeaderboardResponse,
  PvpRewardsIndexResponse,
  PvpSeasonIndexResponse,
  PvpSeasonResponse,
} from './types';

/**
 * Get a PvP leaderboard by PvP season ID and bracket.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @param pvpBracket The PvP bracket.
 * @returns The PvP leaderboard.
 */
export function pvpLeaderboard(
  namespace: DynamicClassicNamespaces,
  pvpRegionId: number,
  pvpSeasonId: number,
  pvpBracket: string,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${encodeURIComponent(pvpRegionId)}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-leaderboard/${encodeURIComponent(pvpBracket)}`,
  };
}
/**
 * Get a PvP season leaderboard by PvP season ID and bracket.
 *
 * Only available for the `classic` (progression) namespace. Classic responses omit `entries` when the
 * bracket is empty.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpSeasonId The PvP season ID.
 * @param pvpBracket The PvP bracket (for example `2v2`, `3v3`, or `rbg`).
 * @returns The PvP season leaderboard. See {@link PvpLeaderboardResponse}.
 */
export function pvpSeasonLeaderboard(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  pvpSeasonId: number,
  pvpBracket: string,
): Resource<PvpLeaderboardResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-leaderboard/${encodeURIComponent(pvpBracket)}`,
  };
}
/**
 * Returns an index of PvP leaderboards for a PvP season.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season leaderboard index. See {@link PvpLeaderboardIndexResponse}.
 */
export function pvpSeasonLeaderboards(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  pvpSeasonId: number,
): Resource<PvpLeaderboardIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-leaderboard/index`,
  };
}
/**
 * Returns an index of PvP rewards for a PvP season.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season rewards index. See {@link PvpRewardsIndexResponse}.
 */
export function pvpSeasonRewards(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  pvpSeasonId: number,
): Resource<PvpRewardsIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-reward/index`,
  };
}
/**
 * Returns an index of PvP leaderboards for a PvP season in a given PvP region.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP leaderboard index.
 */
export function pvpLeaderboardIndex(
  namespace: DynamicClassicNamespaces,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${encodeURIComponent(pvpRegionId)}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-leaderboard/index`,
  };
}
/**
 * Returns a PvP season by region ID and season ID.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season.
 */
export function pvpRegionalSeason(
  namespace: DynamicClassicNamespaces,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${encodeURIComponent(pvpRegionId)}/pvp-season/${encodeURIComponent(pvpSeasonId)}`,
  };
}
/**
 * Returns an index of PvP Seasons in a PvP region.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpRegionalSeasonIndex(
  namespace: DynamicClassicNamespaces,
  pvpRegionId: number,
): Resource<PvpSeasonIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${encodeURIComponent(pvpRegionId)}/pvp-season/index`,
  };
}
/**
 * Returns an index of PvP Regions.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @returns The PvP region index.
 */
export function pvpRegionIndex(namespace: DynamicClassicNamespaces): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/index`,
  };
}
/**
 * Returns an index of PvP rewards for a PvP season in a given PvP region.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpRegionId The PvP region ID.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP reward index.
 */
export function pvpRewardsIndex(
  namespace: DynamicClassicNamespaces,
  pvpRegionId: number,
  pvpSeasonId: number,
): Resource<unknown> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-region/${encodeURIComponent(pvpRegionId)}/pvp-season/${encodeURIComponent(pvpSeasonId)}/pvp-reward/index`,
  };
}
/**
 * Get a PvP season by ID.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param pvpSeasonId The PvP season ID.
 * @returns The PvP season. See {@link PvpSeasonResponse}.
 */
export function pvpSeason(namespace: DynamicClassicNamespaces, pvpSeasonId: number): Resource<PvpSeasonResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/${encodeURIComponent(pvpSeasonId)}`,
  };
}
/**
 * Get a PvP season index.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
 */
export function pvpSeasonIndex(namespace: DynamicClassicNamespaces): Resource<PvpSeasonIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/pvp-season/index`,
  };
}
