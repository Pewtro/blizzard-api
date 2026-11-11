import type { Href } from '@blizzard-api/core';

/**
 * The character reference returned by World of Warcraft: Forever profile endpoints.
 */
export interface CharacterReference {
  id: number;
  key: Href;
  name: string;
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
