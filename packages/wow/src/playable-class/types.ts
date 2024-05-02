import type { Gender, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a playable class index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableClassIndexResponse extends ResponseBase {
  classes: Array<NameIdKey>;
}

/**
 * The response for a playable class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableClassResponse extends ResponseBase, NameId {
  gender_name: Gender;
  power_type: NameIdKey;
  specializations: Array<NameIdKey>;
  media: Media;
  pvp_talent_slots: { href: string };
  playable_races: Array<NameIdKey>;
}

interface Media extends KeyBase {
  id: number;
}

/**
 * The response for playable class media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableClassMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a playable class's PvP talent slots.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTalentSlotsResponse extends ResponseBase {
  talent_slots: Array<TalentSlot>;
}

interface TalentSlot {
  slot_number: number;
  unlock_player_level: number;
}
