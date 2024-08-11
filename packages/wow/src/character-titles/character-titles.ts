import type { Resource } from '@blizzard-api/core';
import type { CharacterTitlesSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of titles a character has obtained.
 */
export function characterTitlesSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterTitlesSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/titles`,
  };
}
