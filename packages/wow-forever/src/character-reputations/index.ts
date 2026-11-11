import type { Resource } from '@blizzard-api/core';
import type { CharacterReputationsSummaryResponse } from './types';

const basePath = '/profile/wow/character';

/**
 * Get a summary of a character's reputations.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's reputations. See {@link CharacterReputationsSummaryResponse}.
 */
export function characterReputationsSummary(
  name: string,
  surname: string,
): Resource<CharacterReputationsSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/reputations`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
