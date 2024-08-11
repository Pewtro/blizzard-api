import type { Resource } from '@blizzard-api/core';
import type { CharacterHunterPetsSummaryResponse } from './types';

/**
 * If the character is a hunter, returns a summary of the character's hunter pets. Otherwise, returns an HTTP 404 Not Found error.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the character's hunter pets.
 */
export function characterHunterPetsSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterHunterPetsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/hunter-pets`,
  };
}
