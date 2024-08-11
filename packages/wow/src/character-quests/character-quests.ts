import type { Resource } from '@blizzard-api/core';
import type { CharacterCompletedQuestsResponse, CharacterQuestsResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a character's active quests as well as a link to the character's completed quests.
 */
export function characterQuests(realmSlug: string, characterName: string): Resource<CharacterQuestsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/quests`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a list of quests that a character has completed.
 */
export function characterCompletedQuests(
  realmSlug: string,
  characterName: string,
): Resource<CharacterCompletedQuestsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/quests/completed`,
  };
}
