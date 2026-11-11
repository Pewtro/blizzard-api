import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterHunterPetsSummaryResponse } from './types';

/**
 * Get a summary of the hunter pets of a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's hunter pets. See {@link CharacterHunterPetsSummaryResponse}.
 */
export function characterHunterPetsSummary(
  name: string,
  surname: string,
): Resource<CharacterHunterPetsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/hunter-pets`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
