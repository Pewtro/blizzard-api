import { describe, expect, it } from 'vitest';
import { characterAppearanceSummary } from './character-appearance';

describe('characterAppearanceSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/appearance',
      token: 'test-token',
    };

    const result = characterAppearanceSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
