import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterEquipmentSummaryResponse } from './types';

export function characterEquipmentSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterEquipmentSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/equipment`,
    token,
  };
}
