import type { Character, Href, IdKey, NameIdKey, NameType, ResponseBase } from '@blizzard-api/core';
import type { PetQuality, PetStats } from '../shared/types';

export interface CharacterCollectionDecorResponse extends ResponseBase {
  decor_collected: Array<DecorItem>;
}

export interface CharacterCollectionsIndexResponse extends ResponseBase {
  character: Character;
  decors: Href;
  heirlooms: Href;
  mounts: Href;
  pets: Href;
  toys: Href;
  transmogs: Href;
}

export interface CharacterHeirloomsCollectionSummaryResponse extends ResponseBase {
  heirlooms: Array<Heirloom>;
}

export interface CharacterMountsCollectionSummaryResponse extends ResponseBase {
  mounts: Array<Mount>;
}

export interface CharacterPetsCollectionSummaryResponse extends ResponseBase {
  pets: Array<Pet>;
  unlocked_battle_pet_slots: number;
}

export interface CharacterToysCollectionSummaryResponse extends ResponseBase {
  toys: Array<Toy>;
}

export interface CharacterTransmogCollectionSummaryResponse extends ResponseBase {
  appearance_sets?: Array<NameIdKey>;
  slots?: Array<Slot>;
}

interface DecorItem {
  decor: NameIdKey;
  quantity: number;
}

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

interface Mount {
  is_character_specific?: boolean;
  is_favorite?: boolean;
  is_useable: boolean;
  mount: NameIdKey;
}

interface Pet {
  active_slot?: number;
  creature_display?: IdKey;
  id: number;
  is_active?: boolean;
  is_favorite?: boolean;
  level: number;
  name?: string;
  quality: PetQuality;
  species: NameIdKey;
  stats: PetStats;
}

interface Slot {
  appearances: Array<IdKey>;
  slot: NameType;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}
