import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterProfessionsSummaryResponse } from './types';

/**
 * Get a summary of the professions of a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's professions. See {@link CharacterProfessionsSummaryResponse}.
 */
export function characterProfessionsSummary(
  name: string,
  surname: string,
): Resource<CharacterProfessionsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/professions`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
