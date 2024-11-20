import type { GenderName, KeyBase, NameId, NameIdKey, ResponseBase } from '../../../wow/src/base';

export type { PlayableClassIndexResponse, PlayableClassMediaResponse } from '../../../wow/src/playable-class/types';

/**
 * The response for a playable class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis}
 */
export interface PlayableClassResponse extends NameId, ResponseBase {
  gender_name: GenderName;
  media: Media;
  playable_races: Array<NameIdKey>;
  power_type: NameIdKey;
  pvp_talent_slots: { href: string };
}

interface Media extends KeyBase {
  id: number;
}
