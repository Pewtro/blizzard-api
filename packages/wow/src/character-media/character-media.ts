import type { Resource } from '@blizzard-api/core';
import type { CharacterMediaSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the media assets available for a character (such as an avatar render).
 */
export function characterMediaSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterMediaSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/character-media`,
  };
}
