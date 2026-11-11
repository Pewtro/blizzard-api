import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterStatisticsSummaryResponse } from './types';

/**
 * Get a statistics summary for a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's statistics. See {@link CharacterStatisticsSummaryResponse}.
 */
export function characterStatisticsSummary(
  name: string,
  surname: string,
): Resource<CharacterStatisticsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/statistics`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
