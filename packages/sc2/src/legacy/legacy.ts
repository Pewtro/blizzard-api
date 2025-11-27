import type { Resource } from '@blizzard-api/core';
import { starcraftRegion } from '../regions';
import type { StarcraftRegion } from '../regions';
import type {
  LegacyAchievementsResponse,
  LegacyLaddersResponse,
  LegacyMatchHistoryResponse,
  LegacyProfileResponse,
  LegacyRewardsResponse,
} from './types';

/**
 * Returns the legacy achievements for the specified region.
 * @param regionId The region ID for Starcraft.
 * @returns A resource representing the legacy achievements. See {@link LegacyAchievementsResponse}
 */
export function legacyAchievements(regionId: StarcraftRegion): Resource<LegacyAchievementsResponse> {
  return {
    path: `/sc2/legacy/data/achievements/${starcraftRegion[regionId]}`,
  };
}

/**
 * Returns the ladder information for the specified ladder.
 * @param regionId The region ID for Starcraft.
 * @param ladderId The ID of the ladder.
 * @returns A resource representing the ladder. See {@link LadderResponse}
 */
export function legacyLadder(regionId: StarcraftRegion, ladderId: number): Resource<unknown> {
  return {
    path: `/sc2/legacy/ladder/${starcraftRegion[regionId]}/${ladderId}`,
  };
}

/**
 * Returns the ladders for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the ladders for the given profile. See {@link LegacyLaddersResponse}
 */
export function legacyLadders(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyLaddersResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladders`,
  };
}

/**
 * Returns the match history for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the match history for the given profile. See {@link LegacyMatchHistoryResponse}
 */
export function legacyMatchHistory(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyMatchHistoryResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/matches`,
  };
}

/**
 * Returns the profile for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the profile for the given ID. See {@link LegacyProfileResponse}
 */
export function legacyProfile(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyProfileResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

/**
 * Returns the rewards for the specified region.
 * @param regionId The region ID for Starcraft.
 * @returns A resource representing the rewards for the given region. See {@link LegacyRewardsResponse}
 */
export function legacyRewards(regionId: StarcraftRegion): Resource<LegacyRewardsResponse> {
  return {
    path: `/sc2/legacy/data/rewards/${starcraftRegion[regionId]}`,
  };
}
