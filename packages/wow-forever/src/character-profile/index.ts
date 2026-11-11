import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterProfileStatusResponse, CharacterProfileSummaryResponse } from './types';

/**
 * Get the profile status and unique ID of a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The status of the character profile. See {@link CharacterProfileStatusResponse}.
 */
export function characterProfileStatus(name: string, surname: string): Resource<CharacterProfileStatusResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/status`,
  };
}

/**
 * Get a summary of the character profile of a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns A summary of the character profile. See {@link CharacterProfileSummaryResponse}.
 */
export function characterProfileSummary(name: string, surname: string): Resource<CharacterProfileSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
