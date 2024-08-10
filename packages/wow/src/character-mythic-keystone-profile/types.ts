import type { Color, Href, KeyBase, NameId, NameIdKey } from '../base';

export interface CharacterMythicKeystoneProfileIndexResponse {
  _links: { self: Href };
  character: Character;
  current_period: CurrentPeriod;
  seasons: Array<{ id: number } & KeyBase>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

interface CurrentPeriod {
  period: { id: number } & KeyBase;
}

export interface CharacterMythicKeystoneSeasonDetailsResponse {
  _links: { self: Href };
  best_runs: Array<BestRun>;
  character: NameIdKey;
  mythic_rating: MythicRating;
  season: { id: number } & KeyBase;
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

interface Member {
  character: { realm: Realm } & NameId;
  equipped_item_level: number;
  race: NameIdKey;
  specialization: NameIdKey;
}

interface MythicRating {
  color: Color;
  rating: number;
}
