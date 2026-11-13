import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type { CharacterHouseResponse } from './types';

/**
 * Get a summary of a house a character has built.
 *
 * Blizzard disabled this endpoint in early 2026 over player privacy concerns, and it currently returns 404 even for
 * characters that own a house. The helper is kept for when it returns; the response type is unverified.
 * @see {@link https://us.forums.blizzard.com/en/blizzard/t/new-housing-apis/56815}
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @param houseNumber The number of the character's house (e.g. 1 for house-1).
 * @returns The character's house. See {@link CharacterHouseResponse}.
 */
export function characterHouse(
  realmSlug: string,
  characterName: string,
  houseNumber: number,
): Resource<CharacterHouseResponse> {
  return {
    namespace: 'profile',
    path: `${wowCharacterBasePath}/${encodeURIComponent(realmSlug)}/${encodeURIComponent(characterName.toLowerCase())}/house/house-${encodeURIComponent(houseNumber)}`,
  };
}
