import type { KeyBase, NameId } from '@blizzard-api/core';

/**
 * The character reference returned by World of Warcraft: Forever profile endpoints.
 */
export interface CharacterReference extends KeyBase, NameId {
  slug: string;
  surname: string;
}

export interface PetQuality {
  name: string;
  type: 'COMMON' | 'POOR' | 'RARE' | 'UNCOMMON';
}

export interface PetStats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}
