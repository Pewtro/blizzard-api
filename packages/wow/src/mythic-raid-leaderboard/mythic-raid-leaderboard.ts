import type { Resource } from '@blizzard-api/core';
import type { Factions } from '../base';
import { base } from '../base';
import type { MythicRaidLeaderboardResponse } from './types';

export const mythicRaidLeaderboardApi = {
  /**
   * Get a Mythic Raid leaderboard by raid and faction.
   * @param raid The slug of the raid.
   * @param faction The faction. Either 'alliance' or 'horde'.
   * @returns The Mythic Raid leaderboard. See {@link MythicRaidLeaderboardResponse}.
   */
  mythicRaidLeaderboard: (
    raid: string,
    faction: Lowercase<keyof typeof Factions>,
  ): Resource<MythicRaidLeaderboardResponse> => {
    return {
      path: `${base}/leaderboard/hall-of-fame/${raid}/${faction}`,
      namespace: 'dynamic',
    };
  },
};
