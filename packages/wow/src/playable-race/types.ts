import type { Faction, Gender, NameId, NameIdKey, ResponseBase } from '../base';

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
  gender_name: Gender;
  faction: Faction;
  is_selectable: boolean;
  is_allied_race: boolean;
  playable_classes: Array<NameIdKey>;
}
