import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterSoulbindsResponse } from './types';

export function characterSoulbinds(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterSoulbindsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/soulbinds`,
    token,
  };
}
