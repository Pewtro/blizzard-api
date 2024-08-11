import type { Resource } from '@blizzard-api/core';
import type { CharacterSpecializationsSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's specializations.
 */
export function characterSpecializationsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterSpecializationsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/specializations`,
  };
}
