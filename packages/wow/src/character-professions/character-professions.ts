import type { Resource } from '@blizzard-api/core';
import type { CharacterProfessionsSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the professions for a character.
 */
export function characterProfessionsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterProfessionsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/professions`,
  };
}
