import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface PetIndexResponse extends ResponseBase {
  pets: Array<NameIdKey>;
}

export interface PetResponse extends ResponseBase, NameId {
  battle_pet_type: BattlePetType;
  description: string;
  is_capturable: boolean;
  is_tradable: boolean;
  is_battlepet: boolean;
  is_alliance_only: boolean;
  is_horde_only: boolean;
  abilities: Array<Ability>;
  source: Source;
  icon: string;
  creature: NameIdKey;
  is_random_creature_display: boolean;
  media: Media;
  should_exclude_if_uncollected: boolean;
}

interface Ability {
  ability: NameIdKey;
  slot: number;
  required_level: number;
}

interface BattlePetType extends NameId {
  type: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  type: string;
  name: string;
}

export interface PetMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

export interface PetAbilityIndexResponse extends ResponseBase {
  abilities: Array<NameIdKey>;
}

export interface PetAbilityResponse extends ResponseBase, NameId {
  battle_pet_type: BattlePetType;
  rounds: number;
  media: Media;
}

export interface PetAbilityMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
