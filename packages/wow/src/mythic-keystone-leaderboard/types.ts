import type { Color, Href, KeyBase, NameId, NameIdKey, NonNeutralFactions, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a Mythic Keystone leaderboard index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneLeaderboardIndexResponse extends ResponseBase {
  current_leaderboards: Array<NameIdKey>;
}

/**
 * The response for a Mythic Keystone leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneLeaderboardResponse extends ResponseBase {
  connected_realm: Href;
  keystone_affixes: Array<KeystoneAffixElement>;
  leading_groups: Array<LeadingGroup>;
  map: NameId;
  map_challenge_mode_id: number;
  name: string;
  period: number;
  period_end_timestamp: number;
  period_start_timestamp: number;
}

interface KeystoneAffixElement {
  keystone_affix: NameIdKey;
  max_level?: number;
  starting_level: number;
}

interface LeadingGroup {
  completed_timestamp: number;
  duration: number;
  keystone_level: number;
  members: Array<Member>;
  mythic_rating: MythicRating;
  ranking: number;
}

interface Member {
  faction: { type: NonNeutralFactions };
  profile: Profile;
  specialization: Specialization;
}
interface MythicRating {
  color: Color;
  rating: number;
}

interface Profile extends NameId {
  realm: Realm;
}

interface Realm extends KeyBase {
  id: number;
  slug: string;
}

interface Specialization extends KeyBase {
  id: number;
}
