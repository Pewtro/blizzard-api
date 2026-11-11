import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterSpecializationsSummaryResponse } from './types';

/**
 * Get a summary of a character's specializations.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's specializations. See {@link CharacterSpecializationsSummaryResponse}.
 */
export function characterSpecializationsSummary(
  name: string,
  surname: string,
): Resource<CharacterSpecializationsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/specializations`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
