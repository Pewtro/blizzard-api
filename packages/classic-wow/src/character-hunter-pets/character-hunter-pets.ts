import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { characterBase } from '../base';
import type { CharacterHunterPetsSummaryResponse } from './types';

/**
 * If the character is a hunter, returns a summary of the character's hunter pets. Otherwise, returns an HTTP 404 Not Found error.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the character's hunter pets.
 */
export function characterHunterPetsSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterHunterPetsSummaryResponse> {
  return {
    namespace,
    path: `${characterBase}/${realmSlug}/${characterName}/hunter-pets`,
  };
}
