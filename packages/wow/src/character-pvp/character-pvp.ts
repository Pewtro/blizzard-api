import type { Resource } from '@blizzard-api/core';
import type { CharacterPvpBracketStatisticsResponse, CharacterPvpSummaryResponse } from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @param bracketId The ID of the PvP bracket.
 * @returns a PvP bracket statistics for a character.
 */
export function characterPvpBracketStatistics(
  realmSlug: string,
  characterName: string,
  bracketId: '2v2' | '3v3' | 'rbg' | `shuffle-${string}-${string}`,
): Resource<CharacterPvpBracketStatisticsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/pvp-bracket/${bracketId}`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a PvP summary for a character.
 */
export function characterPvpSummary(realmSlug: string, characterName: string): Resource<CharacterPvpSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/pvp-summary`,
  };
}
