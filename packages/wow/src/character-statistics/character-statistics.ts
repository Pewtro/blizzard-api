import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterStatisticsSummaryResponse } from './types';

export function characterStatisticsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterStatisticsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/statistics`,
    token,
  };
}
