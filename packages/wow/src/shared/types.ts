/**
 * The quality attributes returned for a World of Warcraft battle pet.
 */
export interface PetQuality {
  name: string;
  type: 'COMMON' | 'POOR' | 'RARE' | 'UNCOMMON';
}

/**
 * The statistics returned for a World of Warcraft battle pet.
 */
export interface PetStats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}
