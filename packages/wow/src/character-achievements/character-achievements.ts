import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterAchievementsSummaryResponse, CharacterAchievementStatisticsResponse } from './types';

const basePath = '/profile/wow/character';

export function characterAchievementsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterAchievementsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName.toLowerCase()}/achievements`,
    token,
  };
}

export function characterAchievementStatistics(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterAchievementStatisticsResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName.toLowerCase()}/achievements/statistics`,
    token,
  };
}
