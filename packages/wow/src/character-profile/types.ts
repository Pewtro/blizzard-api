import type { Faction, Href, NameIdKey, Realm, ResponseBase } from '../base';

export interface CharacterProfileSummaryResponse extends ResponseBase {
  achievement_points: number;
  achievements: Href;
  achievements_statistics: Href;
  active_spec: NameIdKey;
  active_title: { display_string: string } & NameIdKey;
  appearance: Href;
  average_item_level: number;
  character_class: NameIdKey;
  collections: Href;
  covenant_progress: CovenantProgress;
  encounters: Href;
  equipment: Href;
  equipped_item_level: number;
  experience: number;
  faction: Faction;
  gender: Faction;
  guild: Guild;
  hunter_pets: Href;
  id: number;
  last_login_timestamp: number;
  level: number;
  media: Href;
  mythic_keystone_profile: Href;
  name: string;
  name_search: string;
  professions: Href;
  pvp_summary: Href;
  quests: Href;
  race: NameIdKey;
  realm: Realm;
  reputations: Href;
  specializations: Href;
  statistics: Href;
  titles: Href;
}

interface CovenantProgress {
  chosen_covenant: NameIdKey;
  renown_level: number;
  soulbinds: Href;
}

interface Guild extends NameIdKey {
  faction: Faction;
  realm: Realm;
}

export interface CharacterProfileStatusResponse extends ResponseBase {
  id: number;
  is_valid: boolean;
}
