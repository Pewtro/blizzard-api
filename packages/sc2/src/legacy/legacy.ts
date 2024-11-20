import type { Resource } from '@blizzard-api/core';
import { starcraftRegion, type StarcraftRegion } from '../base';
import type {
  LegacyAchievementsResponse,
  LegacyLaddersResponse,
  LegacyMatchHistoryResponse,
  LegacyProfileResponse,
  LegacyRewardsResponse,
} from './types';

export function legacyAchievements(regionId: StarcraftRegion): Resource<LegacyAchievementsResponse> {
  return {
    path: `/sc2/legacy/data/achievements/${starcraftRegion[regionId]}`,
  };
}

export function legacyLadder(regionId: StarcraftRegion, ladderId: number): Resource<unknown> {
  return {
    path: `/sc2/legacy/ladder/${starcraftRegion[regionId]}/${ladderId}`,
  };
}

export function legacyLadders(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyLaddersResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/ladders`,
  };
}

export function legacyMatchHistory(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyMatchHistoryResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}/matches`,
  };
}

export function legacyProfile(
  regionId: StarcraftRegion,
  realmId: 1 | 2,
  profileId: number,
): Resource<LegacyProfileResponse> {
  return {
    path: `/sc2/legacy/profile/${starcraftRegion[regionId]}/${realmId}/${profileId}`,
  };
}

export function legacyRewards(regionId: StarcraftRegion): Resource<LegacyRewardsResponse> {
  return {
    path: `/sc2/legacy/data/rewards/${starcraftRegion[regionId]}`,
  };
}
