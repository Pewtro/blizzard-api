import type { Resource } from '@blizzard-api/core';
import type { CharacterPvpSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a PvP summary for a character.
 */
export function characterPvpSummary(realmSlug: string, characterName: string): Resource<CharacterPvpSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/pvp-summary`,
  };
}
