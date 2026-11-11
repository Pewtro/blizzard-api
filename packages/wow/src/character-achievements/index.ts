import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterAchievementsSummaryResponse, CharacterAchievementStatisticsResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the achievements a character has completed.
 */
export function characterAchievementsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterAchievementsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a character's statistics as they pertain to achievements.
 */
export function characterAchievementStatistics(
  realmSlug: string,
  characterName: string,
): Resource<CharacterAchievementStatisticsResponse> {
  return {
    namespace: 'profile',
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements/statistics`,
  };
}
