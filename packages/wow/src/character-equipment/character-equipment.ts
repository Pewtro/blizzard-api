import type { Resource } from '@blizzard-api/core';
import type { CharacterEquipmentSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the items equipped by a character.
 */
export function characterEquipmentSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterEquipmentSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/equipment`,
  };
}
