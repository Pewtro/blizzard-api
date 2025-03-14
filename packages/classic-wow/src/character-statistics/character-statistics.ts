import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { characterBase } from '../base';
import type { CharacterStatisticsSummaryResponse } from './types';

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a statistics summary for a character.
 */
export function characterStatisticsSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterStatisticsSummaryResponse> {
  return {
    namespace,
    path: `${characterBase}/${realmSlug}/${characterName}/statistics`,
  };
}
