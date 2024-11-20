import type { Character, Color, Faction, Href, KeyBase, NameIdKey, Realm, ResponseBase } from '../base';

export interface GuildAchievementsResponse extends ResponseBase {
  achievements: Array<Achievement>;
  category_progress: Array<CategoryProgress>;
  guild: Guild;
  recent_events: Array<RecentEvent>;
  total_points: number;
  total_quantity: number;
}

export interface GuildActivityResponse extends ResponseBase {
  activities: Array<ActivityElement>;
  guild: Guild;
}

export interface GuildResponse extends ResponseBase {
  achievement_points: number;
  achievements: Href;
  activity: Href;
  created_timestamp: number;
  crest: Crest;
  faction: Faction;
  id: number;
  member_count: number;
  name: string;
  name_search: string;
  realm: Realm;
  roster: Href;
}

export interface GuildRosterResponse extends ResponseBase {
  guild: Guild;
  members: Array<Member>;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: Criteria;
  id: number;
}

interface ActivityElement {
  activity: { type: string };
  character_achievement: CharacterAchievement;
  timestamp: number;
}

interface Border {
  color: RgbWithId;
  id: number;
  media: KeyBase & { id: number };
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface CharacterAchievement {
  achievement: NameIdKey;
  character: Character;
}

interface Crest {
  background: { color: RgbWithId };
  border: Border;
  emblem: Border;
}

interface Criteria {
  amount?: number;
  child_criteria?: Array<Criteria>;
  id: number;
  is_completed: boolean;
}

interface Guild extends NameIdKey {
  faction: Faction;
  realm: Realm;
}

interface Member {
  character: RosterMemberCharacter;
  rank: number;
}

interface Playable extends KeyBase {
  id: number;
}

interface RecentEvent {
  achievement: NameIdKey;
  timestamp: number;
}

interface RgbWithId {
  id: number;
  rgba: Color;
}

interface RosterMemberCharacter extends Character {
  level: number;
  playable_class: Playable;
  playable_race: Playable;
}
