import type { Gender, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface PlayableClassIndexResponse extends ResponseBase {
  classes: Array<NameIdKey>;
}

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

export interface PlayableClassMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

export interface PvpTalentSlotsResponse extends ResponseBase {
  talent_slots: Array<TalentSlot>;
}

interface TalentSlot {
  slot_number: number;
  unlock_player_level: number;
}
