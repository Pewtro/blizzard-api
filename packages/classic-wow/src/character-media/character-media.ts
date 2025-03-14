import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { characterBase } from '../base';
import type { CharacterMediaSummaryResponse } from './types';

/**
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the media assets available for a character (such as an avatar render).
 */
export function characterMediaSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterMediaSummaryResponse> {
  return {
    namespace,
    path: `${characterBase}/${realmSlug}/${characterName}/character-media`,
  };
}
