import type { Faction, GenderName, NullishNameId, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The playable race index response.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableRaceIndexResponse extends ResponseBase {
  races: Array<NullishNameIdKey>;
}

/**
 * The playable race response.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableRaceResponse extends NullishNameId, ResponseBase {
  faction: Faction;
  gender_name: GenderName;
  is_allied_race: boolean;
  is_selectable: boolean;
  playable_classes: Array<NullishNameIdKey>;
  racial_spells: Array<NullishNameIdKey>;
}
