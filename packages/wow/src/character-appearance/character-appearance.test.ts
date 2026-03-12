import { describe, expect, test } from 'vitest';
import { characterAppearanceSummary } from './character-appearance';

describe('characterAppearanceSummary', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: '/profile/wow/character/test-realm/test-character/appearance',
    };

    const result = characterAppearanceSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
