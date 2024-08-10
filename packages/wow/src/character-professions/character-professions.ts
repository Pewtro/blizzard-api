import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterProfessionsSummaryResponse } from './types';

export function characterProfessionsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterProfessionsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/professions`,
    token,
  };
}
