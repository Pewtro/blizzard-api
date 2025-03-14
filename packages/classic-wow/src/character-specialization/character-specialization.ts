import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { characterBase } from '../base';
import type { CharacterSpecializationsSummaryResponse } from './types';

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's specializations.
 */
export function characterSpecializationsSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterSpecializationsSummaryResponse> {
  return {
    namespace,
    path: `${characterBase}/${realmSlug}/${characterName}/specializations`,
  };
}
