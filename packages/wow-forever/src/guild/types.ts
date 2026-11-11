import type {
  Color,
  Faction,
  Factions,
  Href,
  IdKey,
  NameIdKey,
  NameType,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * A criterion that contributes to a guild achievement.
 */
export interface GuildAchievementCriteria {
  amount?: number;
  child_criteria?: Array<GuildAchievementCriteria>;
  id: number;
  is_completed: boolean;
}

/**
 * The response for a guild.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildResponse extends ResponseBase {
  achievement_points: number;
  achievements: Href;
  activity: Href;
  created_timestamp: number;
  crest?: Crest;
  faction: Faction;
  id: number;
  member_count: number;
  name: string;
  name_search: string;
  roster: Href;
  ruleset: NullishNameIdKey;
  slug: string;
}

/**
 * The response for a guild's achievements.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildAchievementsResponse extends ResponseBase {
  achievements?: Array<Achievement>;
  category_progress?: Array<CategoryProgress>;
  guild: GuildReference;
  recent_events?: Array<RecentEvent>;
  total_points?: number;
  total_quantity?: number;
}

/**
 * The response for a guild's activity.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildActivityResponse extends ResponseBase {
  activities?: Array<ActivityElement>;
  guild: GuildReference;
}

/**
 * The response for a guild roster.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface GuildRosterResponse extends ResponseBase {
  guild: GuildReference;
  members: Array<Member>;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: GuildAchievementCriteria;
  id: number;
}

interface ActivityElement {
  activity: { type: string };
  character_achievement?: CharacterAchievement;
  encounter_completed?: EncounterActivity;
  timestamp: number;
}

interface Border {
  color: RgbWithId;
  id: number;
  media: IdKey;
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface CharacterAchievement {
  achievement: NameIdKey;
  character: CharacterReference;
}

interface Crest {
  background: { color: RgbWithId };
  border: Border;
  emblem: Border;
}

interface EncounterActivity {
  encounter: NameIdKey;
  mode: Mode;
}

interface GuildReference {
  faction: Faction;
  id: number;
  key: Href;
  name: string;
  slug: string;
}

interface Member {
  character: RosterMemberCharacter;
  rank: number;
}

interface Mode extends NameType {
  type: ModeType;
}

type ModeType =
  | 'HEROIC'
  | 'LEGACY_10_MAN'
  | 'LEGACY_10_MAN_HEROIC'
  | 'LEGACY_25_MAN'
  | 'LEGACY_25_MAN_HEROIC'
  | 'LFR'
  | 'MYTHIC'
  | 'MYTHIC_KEYSTONE'
  | 'NORMAL';

interface RecentEvent {
  achievement: NameIdKey;
  timestamp: number;
}

interface RgbWithId {
  id: number;
  rgba: Color;
}

interface RosterMemberCharacter {
  faction: { type: Factions };
  id: number;
  key: Href;
  level: number;
  name: string;
  playable_class: IdKey;
  playable_race: IdKey;
  slug: string;
  surname: string;
}
