import type { Faction, Gender, Href, IdKey, NameId, NameIdKey, NameType, Realm } from '@blizzard-api/core';
import type { PetQuality, PetStats } from '../shared/types';

export interface AccountCollectionsIndexResponse {
  _links: Links;
  decors?: Href;
  heirlooms: Href;
  mounts: Href;
  pets: Href;
  toys: Href;
  transmogs: Href;
}

export interface AccountDecorCollectionResponse {
  _links: Links;
  decor_collected: Array<DecorItem>;
}

export interface AccountHeirloomsCollectionSummaryResponse {
  _links: Links;
  heirlooms: Array<Heirloom>;
}

export interface AccountMountsCollectionSummaryResponse {
  _links: Links;
  mounts: Array<Mount>;
}

export interface AccountPetsCollectionSummaryResponse {
  _links: Links;
  pets: Array<Pet>;
  unlocked_battle_pet_slots: number;
}

export interface AccountProfileSummaryResponse {
  _links: Links;
  collections: Href;
  id: number;
  wow_accounts?: Array<WowAccount>;
}

export interface AccountToysCollectionSummaryResponse {
  _links: Links;
  toys: Array<Toy>;
}

export interface AccountTransmogsCollectionSummaryResponse {
  _links: Links;
  appearance_sets: Array<NameIdKey>;
  slots: Array<Slot>;
}

export interface ProtectedCharacterProfileSummaryResponse {
  _links: Links;
  bind_position: Position;
  character: Realm;
  id: number;
  money: number;
  name: string;
  position: Position;
  protected_stats: ProtectedStats;
  wow_account: number;
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

interface DecorItem {
  decor: NameIdKey;
  quantity: number;
}

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

interface Links {
  profile: Href;
  self: Href;
  user: Href;
}

interface Mount {
  is_favorite?: boolean;
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

interface Slot {
  appearances: Array<IdKey>;
  slot: NameType;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}

interface WowAccount {
  characters: Array<Character>;
  id: number;
}
