import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterSpecializationsSummaryResponse } from './types';

export function characterSpecializationsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterSpecializationsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/specializations`,
    token,
  };
}
