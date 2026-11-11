import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterPvpSummaryResponse } from './types';

/**
 * Get a PvP summary for a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's PvP summary. See {@link CharacterPvpSummaryResponse}.
 */
export function characterPvpSummary(name: string, surname: string): Resource<CharacterPvpSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/pvp-summary`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
