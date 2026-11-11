import type { Resource } from '@blizzard-api/core';
import type { CharacterCompletedQuestsResponse, CharacterQuestsResponse } from './types';

const basePath = '/profile/wow/character';

/**
 * Get a character's active quests and a link to the character's completed quests.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's quests. See {@link CharacterQuestsResponse}.
 */
export function characterQuests(name: string, surname: string): Resource<CharacterQuestsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/quests`,
  };
}

/**
 * Get the quests a character has completed.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's completed quests. See {@link CharacterCompletedQuestsResponse}.
 */
export function characterCompletedQuests(name: string, surname: string): Resource<CharacterCompletedQuestsResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/quests/completed`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
