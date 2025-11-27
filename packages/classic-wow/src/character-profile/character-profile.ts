import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import type { CharacterProfileStatusResponse, CharacterProfileSummaryResponse } from './types';

/**
 * Returns the status and a unique ID for a character. A client should delete information about a character from their application if any of the following conditions occur:
 * - an HTTP 404 Not Found error is returned
 * - the is_valid value is false
 * - the returned character ID doesn't match the previously recorded value for the character
 *
 * The following example illustrates how to use this endpoint:
 *
 * 1. A client requests and stores information about a character, including its unique character ID and the timestamp of the request.
 * 2. After 30 days, the client makes a request to the status endpoint to verify if the character information is still valid.
 * 3. If character cannot be found, is not valid, or the characters IDs do not match, the client removes the information from their application.
 * 4. If the character is valid and the character IDs match, the client retains the data for another 30 days.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns the status of the character profile for a character.
 */
export function characterProfileStatus(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<typeof namespace extends 'profile-classic1x' ? CharacterProfileStatusResponse : never> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/status`,
  };
}

/**
 * Returns a summary of the character profile for a character.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the character profile for a character.
 */
export function characterProfileSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterProfileSummaryResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}`,
  };
}
