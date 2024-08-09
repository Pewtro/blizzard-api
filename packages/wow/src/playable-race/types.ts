import type { Faction, GenderName, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The playable race index response.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableRaceIndexResponse extends ResponseBase {
  races: Array<NameIdKey>;
}

/**
 * The playable race response.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableRaceResponse extends ResponseBase, NameId {
  faction: Faction;
  gender_name: GenderName;
  is_allied_race: boolean;
  is_selectable: boolean;
  playable_classes: Array<NameIdKey>;
}
