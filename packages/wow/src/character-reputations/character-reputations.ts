import type { Resource } from '@blizzard-api/core';
import type { CharacterReputationsSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's reputations.
 */
export function characterReputationsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterReputationsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/reputations`,
  };
}
