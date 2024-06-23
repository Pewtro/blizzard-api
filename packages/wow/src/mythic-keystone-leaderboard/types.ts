import type { Color, Factions, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

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
  connected_realm: { href: string };
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
  faction: { type: keyof typeof Factions };
  profile: Profile;
  specialization: Specialization;
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

interface MythicRating {
  color: Color;
  rating: number;
}
