import type { Character, Href, KeyBase, NameIdKey, ResponseBase } from '../base';

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

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

export interface CharacterMountsCollectionSummaryResponse extends ResponseBase {
  mounts: Array<Mount>;
}

interface Mount {
  is_character_specific?: boolean;
  is_favorite?: boolean;
  is_useable: boolean;
  mount: NameIdKey;
}

export interface CharacterPetsCollectionSummaryResponse extends ResponseBase {
  pets: Array<Pet>;
  unlocked_battle_pet_slots: number;
}

interface Pet {
  active_slot?: number;
  creature_display?: { id: number } & KeyBase;
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

interface Stats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}

export interface CharacterToysCollectionSummaryResponse extends ResponseBase {
  toys: Array<Toy>;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}

export interface CharacterTransmogCollectionSummaryResponse extends ResponseBase {
  appearance_sets: Array<NameIdKey>;
  slots: Array<Slot>;
}

interface Slot {
  appearances: Array<{ id: number } & KeyBase>;
  slot: Slot;
}

interface Slot {
  name: string;
  type: string;
}
