import type { Faction, Gender, Href, NameIdKey, Realm, ResponseBase } from '../../../wow/src/base';
export type { CharacterProfileStatusResponse } from '../../../wow/src/character-profile/types';

export interface CharacterProfileSummaryResponse extends ResponseBase {
  achievement_points?: number;
  achievements?: Href;
  active_spec: NameIdKey;
  active_title?: { name: string };
  appearance: Href;
  average_item_level: number;
  character_class: NameIdKey;
  equipment: Href;
  equipped_item_level: number;
  experience: number;
  faction: Faction;
  gender: Gender;
  guild: Guild;
  id: number;
  //Hardcore only
  is_ghost?: boolean;
  //Hardcore only
  is_self_found?: boolean;
  last_login_timestamp: number;
  level: number;
  media: Href;
  name: string;
  pvp_summary: Href;
  race: NameIdKey;
  realm: Realm;
  specializations: Href;
  statistics: Href;
  titles: Href;
}

interface Guild extends NameIdKey {
  faction: Faction;
  realm: Realm;
}
