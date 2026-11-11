import type { Character, Color, IdKey, NameId, NameIdKey, Realm, ResponseBase } from '@blizzard-api/core';

export interface CharacterMythicKeystoneProfileIndexResponse extends ResponseBase {
  character: Character;
  current_period: CurrentPeriod;
  seasons: Array<IdKey>;
}

export interface CharacterMythicKeystoneSeasonDetailsResponse extends ResponseBase {
  best_runs: Array<BestRun>;
  character: Character;
  mythic_rating: MythicRating;
  season: IdKey;
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
  period: IdKey;
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
