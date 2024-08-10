import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterHunterPetsSummaryResponse } from './types';

export function characterHunterPetsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterHunterPetsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/hunter-pets`,
    token,
  };
}
