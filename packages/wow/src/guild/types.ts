import type { Character, Color, Faction, Href, KeyBase, NameIdKey, Realm, ResponseBase } from '../base';

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

interface Crest {
  background: { color: RgbWithId };
  border: Border;
  emblem: Border;
}

interface RgbWithId {
  id: number;
  rgba: Color;
}

interface Border {
  color: RgbWithId;
  id: number;
  media: { id: number } & KeyBase;
}

export interface GuildActivityResponse extends ResponseBase {
  activities: Array<ActivityElement>;
  guild: Guild;
}

interface ActivityElement {
  activity: { type: string };
  character_achievement: CharacterAchievement;
  timestamp: number;
}

interface CharacterAchievement {
  achievement: NameIdKey;
  character: Character;
}

interface Guild extends NameIdKey {
  faction: Faction;
  realm: Realm;
}

export interface GuildAchievementsResponse extends ResponseBase {
  achievements: Array<Achievement>;
  category_progress: Array<CategoryProgress>;
  guild: Guild;
  recent_events: Array<RecentEvent>;
  total_points: number;
  total_quantity: number;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: Criteria;
  id: number;
}

interface Criteria {
  amount?: number;
  child_criteria?: Array<Criteria>;
  id: number;
  is_completed: boolean;
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface RecentEvent {
  achievement: NameIdKey;
  timestamp: number;
}

export interface GuildRosterResponse extends ResponseBase {
  guild: Guild;
  members: Array<Member>;
}

interface Member {
  character: RosterMemberCharacter;
  rank: number;
}

interface RosterMemberCharacter extends Character {
  level: number;
  playable_class: Playable;
  playable_race: Playable;
}

interface Playable extends KeyBase {
  id: number;
}
