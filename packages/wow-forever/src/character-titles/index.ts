import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterTitlesSummaryResponse } from './types';

/**
 * Get a summary of the titles a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's titles. See {@link CharacterTitlesSummaryResponse}.
 */
export function characterTitlesSummary(name: string, surname: string): Resource<CharacterTitlesSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/titles`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
