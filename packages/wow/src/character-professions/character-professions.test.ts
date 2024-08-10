import { describe, expect, it } from 'vitest';
import { characterProfessionsSummary } from './character-professions';

describe('characterProfessionsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/professions',
      token: 'test-token',
    };

    const result = characterProfessionsSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
