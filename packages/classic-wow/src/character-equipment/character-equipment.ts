import type { Resource } from '@blizzard-api/core';
import type { BlizzardNamespaces } from '@blizzard-api/core';
import { characterBase } from '../base';
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
    path: `${characterBase}/${realmSlug}/${characterName}/equipment`,
  };
}
