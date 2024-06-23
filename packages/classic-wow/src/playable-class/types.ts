import type { Gender, KeyBase, NameId, NameIdKey, ResponseBase } from '../../../wow/src/base';

export type { PlayableClassIndexResponse, PlayableClassMediaResponse } from '../../../wow/src/playable-class/types';

/**
 * The response for a playable class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis}
 */
export interface PlayableClassResponse extends ResponseBase, NameId {
  gender_name: Gender;
  media: Media;
  playable_races: Array<NameIdKey>;
  power_type: NameIdKey;
  pvp_talent_slots: { href: string };
}

interface Media extends KeyBase {
  id: number;
}
