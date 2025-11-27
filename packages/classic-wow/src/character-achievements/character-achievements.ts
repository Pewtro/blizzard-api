import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import type { CharacterAchievementsSummaryResponse, CharacterAchievementStatisticsResponse } from './types';

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}. Note: This API is not supported for classic era realms.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the achievements a character has completed.
 */
export function characterAchievementsSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterAchievementsSummaryResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements`,
  };
}

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}. Note: This API is not supported for classic era realms.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a character's statistics as they pertain to achievements.
 */
export function characterAchievementStatistics(
  namespace: Extract<BlizzardNamespaces, 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterAchievementStatisticsResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/achievements/statistics`,
  };
}
