import type { Origins } from '@blizzard-api/core';
import type { Factions, KeyBase, NameId, ResponseBase } from '../base';

/**
 * The response for a Mythic Raid leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicRaidLeaderboardResponse extends ResponseBase {
  slug: string;
  criteria_type: string;
  entries: Array<Entry>;
  journal_instance: JournalInstance;
}

interface Entry {
  guild: Guild;
  faction: { type: keyof typeof Factions };
  timestamp: number;
  region: Origins | 'cn';
  rank: number;
}

interface Guild extends NameId {
  realm: Realm;
}

interface Realm {
  name: null;
  id: number;
  slug: string;
}

interface JournalInstance extends KeyBase {
  name: null;
  id: number;
}
