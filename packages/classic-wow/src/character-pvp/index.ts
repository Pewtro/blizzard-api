import { wowCharacterBasePath } from '@blizzard-api/core';
import type { ProfileClassicNamespaces, Resource } from '@blizzard-api/core';
import type { CharacterPvpBracketStatisticsResponse } from './types';

/**
 * Get a character's PvP bracket statistics.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @param pvpBracket The PvP bracket (for example `2v2`, `3v3`, or `rbg`).
 * @returns The character's PvP bracket statistics. See {@link CharacterPvpBracketStatisticsResponse}.
 */
export function characterPvpBracketStatistics(
  namespace: Extract<ProfileClassicNamespaces, 'profile-classic'>,
  realmSlug: string,
  characterName: string,
  pvpBracket: string,
): Resource<CharacterPvpBracketStatisticsResponse> {
  return {
    namespace,
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName.toLowerCase()}/pvp-bracket/${pvpBracket}`,
  };
}
