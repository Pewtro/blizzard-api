import type { Resource } from '@blizzard-api/core';
import { starcraftRegion } from '../regions';
import type { StarcraftRegion } from '../regions';
import type { LadderResponse, LadderSummaryResponse, MetadataResponse, StaticProfileResponse } from './types';

/**
 * Returns the ladder information for the specified profile and ladder.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @param ladderId The ID of the ladder.
 * @returns A resource representing the ladder. See {@link LadderResponse}
 */
export function ladder(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
  ladderId: number,
): Resource<LadderResponse> {
  return {
    path: `/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladder/${ladderId}`,
  };
}

/**
 * Returns the ladder summary information for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the ladder summary. See {@link LadderSummaryResponse}
 */
export function ladderSummary(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LadderSummaryResponse> {
  return {
    path: `/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladder/summary`,
  };
}

/**
 * Returns the metadata information for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the metadata. See {@link MetadataResponse}
 */
export function metadata(regionId: StarcraftRegion, realmId: 1 | 2, profileId: number): Resource<MetadataResponse> {
  return {
    path: `/sc2/metadata/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

/**
 * Returns the profile information for the specified profile.
 * @param regionId The region ID for Starcraft.
 * @param realmId 1 or 2
 * @param profileId The ID of the profile.
 * @returns A resource representing the profile. See {@link MetadataResponse}
 */
export function profile(regionId: StarcraftRegion, realmId: 1 | 2, profileId: number): Resource<MetadataResponse> {
  return {
    path: `/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

/**
 *
 * @param regionId The region ID for Starcraft.
 * @returns A resource representing the static profile. See {@link StaticProfileResponse}
 */
export function staticProfile(regionId: StarcraftRegion): Resource<StaticProfileResponse> {
  return {
    path: `/sc2/static/profile/${starcraftRegion[regionId]}`,
  };
}
