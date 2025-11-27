import type { Character, Href, KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterCollectionsIndexResponse extends ResponseBase {
  character: Character;
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
  appearance_sets: Array<NameIdKey>;
  slots: Array<Slot>;
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
  creature_display?: KeyBase & { id: number };
  id: number;
  is_active?: boolean;
  is_favorite?: boolean;
  level: number;
  name?: string;
  quality: Quality;
  species: NameIdKey;
  stats: Stats;
}

interface Quality {
  name: 'Common' | 'Poor' | 'Rare' | 'Uncommon';
  type: 'COMMON' | 'POOR' | 'RARE' | 'UNCOMMON';
}

interface Slot {
  appearances: Array<KeyBase & { id: number }>;
  slot: Slot;
}

interface Slot {
  name: string;
  type: string;
}

interface Stats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}
