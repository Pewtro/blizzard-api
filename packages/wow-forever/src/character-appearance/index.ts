import type { Resource } from '@blizzard-api/core';
import type { CharacterAppearanceResponse } from './types';

const basePath = '/profile/wow/character';

/**
 * Get a summary of a character's appearance settings.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns A summary of the character's appearance. See {@link CharacterAppearanceResponse}.
 */
export function characterAppearanceSummary(name: string, surname: string): Resource<CharacterAppearanceResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/appearance`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
