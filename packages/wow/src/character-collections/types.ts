import type { Href, KeyBase, NameIdKey } from '../base';

export interface CharacterCollectionsIndexResponse {
  _links: { self: Href };
  character: Character;
  heirlooms: Href;
  mounts: Href;
  pets: Href;
  toys: Href;
  transmogs: Href;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

export interface CharacterHeirloomsCollectionSummaryResponse {
  _links: { self: Href };
  heirlooms: Array<Heirloom>;
}

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

export interface CharacterMountsCollectionSummaryResponse {
  _links: { self: Href };
  mounts: Array<Mount>;
}

interface Mount {
  is_character_specific?: boolean;
  is_favorite?: boolean;
  is_useable: boolean;
  mount: NameIdKey;
}

export interface CharacterPetsCollectionSummaryResponse {
  _links: { self: Href };
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

export interface CharacterToysCollectionSummaryResponse {
  _links: { self: Href };
  toys: Array<Toy>;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}

export interface CharacterTransmogCollectionSummaryResponse {
  _links: { self: Href };
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
