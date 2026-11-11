import { describe, expect, test } from 'vitest';
import { characterHunterPetsSummary } from './index';

describe('characterHunterPetsApi', () => {
  test('characterHunterPetsSummary should return a resource object with the correct path and namespace', () => {
    const resource = characterHunterPetsSummary('Ba', 'Dut');

    expect(resource.path).toBe('/profile/wow/character/ba-dut/hunter-pets');
    expect(resource.namespace).toBe('profile-forever');
  });
});
