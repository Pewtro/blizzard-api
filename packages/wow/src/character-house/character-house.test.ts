import { describe, expect, test } from 'vitest';
import { characterHouse } from './index';

describe('characterHouseApi', () => {
  test('characterHouse should return a resource object with the correct path and namespace', () => {
    const resource = characterHouse('realm-slug', 'Character-Name', 1);

    expect(resource.path).toBe('/profile/wow/character/realm-slug/character-name/house/house-1');
    expect(resource.namespace).toBe('profile');
  });
});
