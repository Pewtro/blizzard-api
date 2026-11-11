import type { Resource } from '@blizzard-api/core';
import type { CharacterMythicKeystoneProfileIndexResponse } from './types';

const basePath = '/profile/wow/character';

/**
 * Get the Mythic Keystone profile index for a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's Mythic Keystone profile. See {@link CharacterMythicKeystoneProfileIndexResponse}.
 */
export function characterMythicKeystoneProfileIndex(
  name: string,
  surname: string,
): Resource<CharacterMythicKeystoneProfileIndexResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/mythic-keystone-profile`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
