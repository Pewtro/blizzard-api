import type { Resource } from '@blizzard-api/core';
import type { CharacterStatisticsSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a statistics summary for a character.
 */
export function characterStatisticsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterStatisticsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/statistics`,
  };
}
