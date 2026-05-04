import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { wowCharacterBasePath } from '@blizzard-api/core';
import type { CharacterEquipmentSummaryResponse } from './types';

/**
 * Returns a summary of the items equipped by a character.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The realm slug.
 * @param characterName The character name.
 * @returns The character equipment summary.
 */
export function characterEquipmentSummary(
  namespace: Extract<BlizzardNamespaces, 'profile-classic1x' | 'profile-classic'>,
  realmSlug: string,
  characterName: string,
): Resource<CharacterEquipmentSummaryResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/equipment`,
  };
}
