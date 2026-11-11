import type { Faction, Gender, Href, IdKey, NameIdKey, NameType } from '@blizzard-api/core';
import type { PetQuality, PetStats } from '../shared/types';

/**
 * The response for an account profile summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
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
  heirlooms?: Array<Heirloom>;
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

/**
 * The response for an account transmog collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AccountToysCollectionSummaryResponse {
  _links: Links;
  toys: Array<Toy>;
}

export interface AccountTransmogsCollectionSummaryResponse {
  _links: Links;
  appearance_sets?: Array<NameIdKey>;
  slots: Array<Slot>;
}

interface AccountCharacter {
  character: Href;
  faction: Faction;
  gender: Gender;
  id: number;
  level: number;
  name: string;
  playable_class: NameIdKey;
  playable_race: NameIdKey;
  protected_character: Href;
  surname: string;
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

interface Slot {
  appearances: Array<IdKey>;
  slot: NameType;
}

interface Toy {
  is_favorite?: boolean;
  toy: NameIdKey;
}

interface WowAccount {
  characters: Array<AccountCharacter>;
  id: number;
}
