import type { Character, Color, KeyBase, NameId, NameIdKey, Realm, ResponseBase } from '../base';

export interface CharacterMythicKeystoneProfileIndexResponse extends ResponseBase {
  character: Character;
  current_period: CurrentPeriod;
  seasons: Array<KeyBase & { id: number }>;
}

export interface CharacterMythicKeystoneSeasonDetailsResponse extends ResponseBase {
  best_runs: Array<BestRun>;
  character: NameIdKey;
  mythic_rating: MythicRating;
  season: KeyBase & { id: number };
}

interface BestRun {
  completed_timestamp: number;
  dungeon: NameIdKey;
  duration: number;
  is_completed_within_time: boolean;
  keystone_affixes: Array<NameIdKey>;
  keystone_level: number;
  members: Array<Member>;
  mythic_rating: MythicRating;
}

interface CurrentPeriod {
  period: KeyBase & { id: number };
}

interface Member {
  character: NameId & { realm: Realm };
  equipped_item_level: number;
  race: NameIdKey;
  specialization: NameIdKey;
}

interface MythicRating {
  color: Color;
  rating: number;
}
