import { describe, expect, test } from 'vitest';
import { characterPvpBracketStatistics } from './index';

const namespace = 'profile-classic' as const;

describe('classicCharacterPvpApi', () => {
  test('characterPvpBracketStatistics should return a resource object with the correct path and namespace', () => {
    const resource = characterPvpBracketStatistics(namespace, 'realm-slug', 'Character-Name', '3v3');

    expect(resource.path).toBe('/profile/wow/character/realm-slug/character-name/pvp-bracket/3v3');
    expect(resource.namespace).toBe(namespace);
  });
});
