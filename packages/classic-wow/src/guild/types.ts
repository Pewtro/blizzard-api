import type { Character, Faction, KeyBase, NameIdKey, Realm, ResponseBase } from '../../../wow/src/base';
import type { GuildResponse as GuildRetailResponse } from '../../../wow/src/guild/types';
export type { GuildAchievementsResponse } from '../../../wow/src/guild/types';

export interface GuildAchievementsClassicEraResponse extends ResponseBase {
  guild: Guild;
}

export interface GuildActivityResponse extends ResponseBase {
  activities?: Array<ActivityElement>;
  guild: Guild;
}

export type GuildResponse = Omit<GuildRetailResponse, 'crest'> & { crest?: GuildRetailResponse['crest'] };

export interface GuildRosterResponse extends ResponseBase {
  guild: Guild;
  members: Array<Member>;
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

interface Member {
  character: RosterMemberCharacter;
  rank: number;
}

interface Playable extends KeyBase {
  id: number;
}

interface RosterMemberCharacter extends Character {
  level: number;
  playable_class: Playable;
  playable_race: Playable;
}
