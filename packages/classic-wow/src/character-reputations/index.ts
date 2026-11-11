import { wowCharacterBasePath } from '@blizzard-api/core';
import type { ProfileClassicNamespaces, Resource } from '@blizzard-api/core';
import type { CharacterReputationsSummaryResponse } from './types';

/**
 * Get a summary of a character's reputations.
 *
 * Currently supported in the `profile-classicann` namespace. The `classic1x` and `classic` namespaces return 404 for
 * valid character profiles.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns The character's reputations summary. See {@link CharacterReputationsSummaryResponse}.
 */
export function characterReputationsSummary(
  namespace: Extract<ProfileClassicNamespaces, 'profile-classicann'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterReputationsSummaryResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/reputations`,
  };
}
