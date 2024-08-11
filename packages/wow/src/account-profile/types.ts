import type { Faction, Gender, Href, KeyBase, NameId, NameIdKey, Realm } from '../base';

export interface AccountProfileSummaryResponse {
  _links: Links;
  collections: Href;
  id: number;
  wow_accounts?: Array<WowAccount>;
}

interface Links {
  profile: Href;
  self: Href;
  user: Href;
}

interface WowAccount {
  characters: Array<Character>;
  id: number;
}

interface Character {
  character: Href;
  faction: Faction;
  gender: Gender;
  id: number;
  level: number;
  name: string;
  playable_class: NameIdKey;
  playable_race: NameIdKey;
  protected_character: Href;
  realm: Realm;
}

export interface ProtectedCharacterProfileSummaryResponse {
  _links: Links;
  bind_position: Position;
  character: NameIdKey & Realm;
  id: number;
  money: number;
  name: string;
  position: Position;
  protected_stats: ProtectedStats;
  wow_account: number;
}

interface Position {
  facing: number;
  map: NameId;
  x: number;
  y: number;
  z: number;
  zone: NameId;
}

interface ProtectedStats {
  level_gold_gained: number;
  level_gold_lost: number;
  level_item_value_gained: number;
  level_number_deaths: number;
  total_gold_gained: number;
  total_gold_lost: number;
  total_item_value_gained: number;
  total_number_deaths: number;
}

export interface AccountCollectionsIndexResponse {
  _links: Links;
  heirlooms: Href;
  mounts: Href;
  pets: Href;
  toys: Href;
  transmogs: Href;
}

export interface AccountHeirloomsCollectionSummaryResponse {
  _links: Links;
  heirlooms: Array<Heirloom>;
}

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

export interface AccountMountsCollectionSummaryResponse {
  _links: Links;
  mounts: Array<Mount>;
}

interface Mount {
  is_favorite?: boolean;
  mount: NameIdKey;
}

export interface AccountPetsCollectionSummaryResponse {
  _links: Links;
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

export interface AccountToysCollectionSummaryResponse {
  _links: Links;
  toys: Array<Toy>;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}

export interface AccountTransmogsCollectionSummaryResponse {
  _links: Links;
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
