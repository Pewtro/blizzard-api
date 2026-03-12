import { describe, expect, test } from 'vitest';
import { characterSpecializationsSummary } from './character-specializations';

describe('characterSpecializationsSummary', () => {
  test('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/specializations`,
    };

    const result = characterSpecializationsSummary(realmSlug, characterName);

    expect(result).toEqual(expectedResource);
  });
});
