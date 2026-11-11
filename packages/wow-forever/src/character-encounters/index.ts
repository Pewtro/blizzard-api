import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterDungeonsResponse, CharacterEncountersSummaryResponse, CharacterRaidsResponse } from './types';

/**
 * Get a summary of a character's encounters.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's encounters. See {@link CharacterEncountersSummaryResponse}.
 */
export function characterEncountersSummary(
  name: string,
  surname: string,
): Resource<CharacterEncountersSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/encounters`,
  };
}

/**
 * Get a summary of a character's completed dungeons.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's completed dungeons. See {@link CharacterDungeonsResponse}.
 */
export function characterDungeons(name: string, surname: string): Resource<CharacterDungeonsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/encounters/dungeons`,
  };
}

/**
 * Get a summary of a character's completed raids.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's completed raids. See {@link CharacterRaidsResponse}.
 */
export function characterRaids(name: string, surname: string): Resource<CharacterRaidsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/encounters/raids`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
