import type { Resource } from '@blizzard-api/core';
import type { CharacterAppearanceResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's appearance settings.
 */
export function characterAppearanceSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterAppearanceResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/appearance`,
  };
}
