import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type { PvpSeasonIndexResponse, PvpSeasonResponse } from './types';

export const classicPvpSeasonApi = {
  /**
   * Get a PvP season index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
   */
  pvpSeasonIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  ): Resource<PvpSeasonIndexResponse> => {
    return {
      namespace,
      path: `${base}/pvp-season/index`,
    };
  },
  /**
   * Get a PvP season by ID.
   * @param pvpSeasonId The PvP season ID.
   * @returns The PvP season. See {@link PvpSeasonResponse}.
   */
  pvpSeason: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpSeasonId: number,
  ): Resource<PvpSeasonResponse> => {
    return {
      namespace,
      path: `${base}/pvp-season/${pvpSeasonId}`,
    };
  },
  /**
   * Returns an index of PvP Regions.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   */
  pvpRegionIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  ): Resource<unknown> => {
    return {
      namespace,
      path: `${base}/pvp-region/index`,
    };
  },
  /**
   * Returns an index of PvP Seasons in a PvP region.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param pvpRegionId The PvP region ID.
   * @returns The PvP season index. See {@link PvpSeasonIndexResponse}.
   */
  pvpRegionalSeasonIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpRegionId: number,
  ): Resource<PvpSeasonIndexResponse> => {
    return {
      namespace,
      path: `${base}/pvp-region/${pvpRegionId}/pvp-season/index`,
    };
  },
  /**
   * Returns a PvP season by region ID and season ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param pvpRegionId The PvP region ID.
   * @param pvpSeasonId The PvP season ID.
   */
  pvpRegionalSeason: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpRegionId: number,
    pvpSeasonId: number,
  ): Resource<unknown> => {
    return {
      namespace,
      path: `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}`,
    };
  },
  /**
   * Returns an index of PvP leaderboards for a PvP season in a given PvP region.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param pvpRegionId The PvP region ID.
   * @param pvpSeasonId The PvP season ID.
   */
  pvpLeaderboardIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpRegionId: number,
    pvpSeasonId: number,
  ): Resource<unknown> => {
    return {
      namespace,
      path: `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/index`,
    };
  },
  /**
   * Get a PvP leaderboard by PvP season ID and bracket.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param pvpRegionId The PvP region ID.
   * @param pvpSeasonId The PvP season ID.
   * @param pvpBracket The PvP bracket.
   */
  pvpLeaderboard: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpRegionId: number,
    pvpSeasonId: number,
    pvpBracket: string,
  ): Resource<unknown> => {
    return {
      namespace,
      path: `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}`,
    };
  },
  /**
   * Returns an index of PvP rewards for a PvP season in a given PvP region.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param pvpRegionId The PvP region ID.
   * @param pvpSeasonId The PvP season ID.
   */
  pvpRewardsIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    pvpRegionId: number,
    pvpSeasonId: number,
  ): Resource<unknown> => {
    return {
      namespace,
      path: `${base}/pvp-region/${pvpRegionId}/pvp-season/${pvpSeasonId}/pvp-reward/index`,
    };
  },
};
