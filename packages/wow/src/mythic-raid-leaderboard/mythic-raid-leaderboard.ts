import type { Factions, Resource  } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { MythicRaidLeaderboardResponse } from './types';

/**
 * Get a Mythic Raid leaderboard by raid and faction.
 * @param raid The slug of the raid.
 * @param faction The faction. Either 'alliance' or 'horde'.
 * @returns The Mythic Raid leaderboard. See {@link MythicRaidLeaderboardResponse}.
 */
export function mythicRaidLeaderboard(
  raid: string,
  faction: Lowercase<Factions>,
): Resource<MythicRaidLeaderboardResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/leaderboard/hall-of-fame/${raid}/${faction}`,
  };
}
