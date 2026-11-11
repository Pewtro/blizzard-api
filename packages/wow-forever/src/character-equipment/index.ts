import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterEquipmentSummaryResponse } from './types';

/**
 * Get a summary of the items equipped by a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's equipped items. See {@link CharacterEquipmentSummaryResponse}.
 */
export function characterEquipmentSummary(name: string, surname: string): Resource<CharacterEquipmentSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowCharacterBasePath}/${characterSlug(name, surname)}/equipment`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
