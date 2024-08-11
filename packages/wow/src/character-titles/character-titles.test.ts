import { describe, expect, it } from 'vitest';
import { characterTitlesSummary } from './character-titles';

describe('characterTitlesSummary', () => {
  it('should return the correct ProtectedResource object', () => {
    const realmSlug = 'test-realm';
    const characterName = 'test-character';
    const token = 'test-token';

    const expectedResource = {
      namespace: 'profile',
      path: `/profile/wow/character/${realmSlug}/${characterName}/titles`,
      token,
    };

    const result = characterTitlesSummary(realmSlug, characterName, token);

    expect(result).toEqual(expectedResource);
  });
});
