import { describe, expect, it } from 'vitest';
import { characterProfessionsSummary } from './character-professions';

describe('characterProfessionsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/professions',
    };

    const result = characterProfessionsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
