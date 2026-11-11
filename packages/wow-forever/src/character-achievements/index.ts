import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterAchievementsSummaryResponse, CharacterAchievementStatisticsResponse } from './types';

/**
 * Get a summary of the achievements a character has completed.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns A summary of the character's achievements. See {@link CharacterAchievementsSummaryResponse}.
 */
export function characterAchievementsSummary(
  name: string,
  surname: string,
): Resource<CharacterAchievementsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/achievements`,
  };
}

/**
 * Get a character's statistics as they pertain to achievements.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's achievement statistics. See {@link CharacterAchievementStatisticsResponse}.
 */
export function characterAchievementStatistics(
  name: string,
  surname: string,
): Resource<CharacterAchievementStatisticsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/achievements/statistics`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
