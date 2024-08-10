import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterPvpSummaryResponse } from './types';

export function characterPvpSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterPvpSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/pvp-summary`,
    token,
  };
}
