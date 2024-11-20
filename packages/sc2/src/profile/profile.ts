import type { Resource } from '@blizzard-api/core';
import { starcraftRegion, type StarcraftRegion } from '../base';
import type { LadderResponse, LadderSummaryResponse, MetadataResponse, StaticProfileResponse } from './types';

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

export function ladderSummary(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LadderSummaryResponse> {
  return {
    path: `/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladder/summary`,
  };
}

export function metadata(regionId: StarcraftRegion, realmId: 1 | 2, profileId: number): Resource<MetadataResponse> {
  return {
    path: `/sc2/metadata/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

export function profile(regionId: StarcraftRegion, realmId: 1 | 2, profileId: number): Resource<MetadataResponse> {
  return {
    path: `/sc2/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

export function staticProfile(regionId: StarcraftRegion): Resource<StaticProfileResponse> {
  return {
    path: `/sc2/static/profile/${starcraftRegion[regionId]}`,
  };
}
