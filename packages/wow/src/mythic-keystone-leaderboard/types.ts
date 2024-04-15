import type { Color, Factions, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

export interface MythicKeystoneLeaderboardIndexResponse extends ResponseBase {
  current_leaderboards: Array<NameIdKey>;
}

export interface MythicKeystoneLeaderboardResponse extends ResponseBase {
  map: NameId;
  period: number;
  period_start_timestamp: number;
  period_end_timestamp: number;
  connected_realm: { href: string };
  leading_groups: Array<LeadingGroup>;
  keystone_affixes: Array<KeystoneAffixElement>;
  map_challenge_mode_id: number;
  name: string;
}

interface KeystoneAffixElement {
  keystone_affix: NameIdKey;
  starting_level: number;
}

interface LeadingGroup {
  ranking: number;
  duration: number;
  completed_timestamp: number;
  keystone_level: number;
  members: Array<Member>;
  mythic_rating: MythicRating;
}

interface Member {
  profile: Profile;
  faction: { type: keyof typeof Factions };
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
