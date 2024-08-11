import type { Resource } from '@blizzard-api/core';
import type { CharacterSoulbindsResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a character's soulbinds.
 */
export function characterSoulbinds(realmSlug: string, characterName: string): Resource<CharacterSoulbindsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/soulbinds`,
  };
}
