import type { Factions, KeyBase, NameId, Origins, ResponseBase  } from '@blizzard-api/core';


/**
 * The response for a Mythic Raid leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicRaidLeaderboardResponse extends ResponseBase {
  criteria_type: string;
  entries: Array<Entry>;
  journal_instance: JournalInstance;
  slug: string;
}

interface Entry {
  faction: { type: Factions };
  guild: Guild;
  rank: number;
  region: Origins;
  timestamp: number;
}

interface Guild extends NameId {
  realm: Realm;
}

interface JournalInstance extends KeyBase {
  id: number;
  name: null;
}

interface Realm {
  id: number;
  name: null;
  slug: string;
}
