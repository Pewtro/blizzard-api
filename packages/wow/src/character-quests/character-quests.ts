import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterCompletedQuestsResponse, CharacterQuestsResponse } from './types';

export function characterQuests(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterQuestsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/quests`,
    token,
  };
}

export function characterCompletedQuests(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterCompletedQuestsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/quests/completed`,
    token,
  };
}
