import type { Faction, Gender, Href, NameId, NameIdKey, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character profile status.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterProfileStatusResponse extends ResponseBase {
  id: number;
  is_valid: boolean;
}

/**
 * The response for a character profile summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterProfileSummaryResponse extends NameId, ResponseBase {
  achievement_points: number;
  achievements: Href;
  achievements_statistics: Href;
  active_title?: ActiveTitle;
  appearance: Href;
  average_item_level: number;
  character_class: NullishNameIdKey;
  collections: Href;
  encounters: Href;
  equipment: Href;
  equipped_item_level: number;
  experience: number;
  faction: Faction;
  gender: Gender;
  guild?: Guild;
  hunter_pets?: Href;
  is_remix: boolean;
  last_login_timestamp: number;
  level: number;
  media: Href;
  mythic_keystone_profile: Href;
  name_search: string;
  professions: Href;
  pvp_summary: Href;
  quests: Href;
  race: NullishNameIdKey;
  reputations: Href;
  ruleset: NullishNameIdKey;
  specializations: Href;
  statistics: Href;
  surname: string;
  titles: Href;
}

interface ActiveTitle extends NameIdKey {
  display_string: string;
}

interface Guild extends NameIdKey {
  faction: Faction;
  slug: string;
}
