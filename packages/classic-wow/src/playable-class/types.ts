import type { Gender, KeyBase, NameId, NameIdKey, ResponseBase } from '../../../wow/src/base';

export type { PlayableClassIndexResponse, PlayableClassMediaResponse } from '../../../wow/src/playable-class/types';

/**
 * The response for a playable class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis}
 */
export interface PlayableClassResponse extends ResponseBase, NameId {
  gender_name: Gender;
  power_type: NameIdKey;
  media: Media;
  pvp_talent_slots: { href: string };
  playable_races: Array<NameIdKey>;
}

interface Media extends KeyBase {
  id: number;
}
