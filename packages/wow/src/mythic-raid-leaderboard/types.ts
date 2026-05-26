import type { KeyBase, NameId, NonNeutralFactions, Origins, ResponseBase } from '@blizzard-api/core';

export type KnownRaidSlugs =
  //Battle for Azeroth
  | 'battle-of-dazaralor'
  | 'crucible-of-storms'
  | 'nyalotha-the-waking-city'
  | 'the-eternal-palace'
  | 'uldir'
  //Shadowlands
  | 'castle-nathria'
  | 'sanctum-of-domination'
  | 'sepulcher-of-the-first-ones'
  //Dragonflight
  | 'aberrus-the-shadowed-crucible'
  | 'amirdrassil-the-dreams-hope'
  | 'vault-of-the-incarnates'
  //The War Within
  | 'liberation-of-undermine'
  | 'manaforge-omega'
  | 'nerubar-palace'
  //Midnight
  | 'march-on-queldanas'
  | 'the-dreamrift'
  | 'the-voidspire'
  //The Last Titan
  //Typescript hack
  | (string & {});

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
  faction: { type: NonNeutralFactions };
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
  name: null | string;
}

interface Realm {
  id: number;
  name: null | string;
  slug: string;
}
