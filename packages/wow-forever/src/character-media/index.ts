import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterMediaSummaryResponse } from './types';

/**
 * Get a summary of the media assets available for a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's media assets. See {@link CharacterMediaSummaryResponse}.
 */
export function characterMediaSummary(name: string, surname: string): Resource<CharacterMediaSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/character-media`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
