import { describe, expect, it } from 'vitest';
import { characterSpecializationsSummary } from './character-specializations';

describe('characterSpecializationsSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/specializations`,
      token,
    };

    const result = characterSpecializationsSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
